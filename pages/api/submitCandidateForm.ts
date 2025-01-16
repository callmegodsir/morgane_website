// pages/api/submitCandidateForm.ts

import type { NextApiRequest, NextApiResponse } from "next";
import formidable, { File } from "formidable";
import fs from "fs/promises";
import dbConnect from "../../libs/dbConnect";
import CandidateSubmission from "../../models/candidateSubmission";
// import { loadSavedCredentialsIfExist, appendToGoogleSheet } from "../../models/googleSheetsService";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await dbConnect();

    const form = formidable({ multiples: false });
    const [fields, files] = await new Promise<
      [formidable.Fields, formidable.Files]
    >((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    let cvFile: File | undefined;

    if (Array.isArray(files.cv)) {
      cvFile = files.cv[0];
    } else {
      cvFile = files.cv as File;
    }

    if (!cvFile || !cvFile.filepath) {
      return res
        .status(400)
        .json({ message: "CV file is required and should be a single file" });
    }

    const cvData = await fs.readFile(cvFile.filepath);

    const candidateData = {
      name: fields.name?.toString() || "",
      firstName: fields.firstName?.toString() || "",
      email: fields.email?.toString() || "",
      company: fields.company?.toString() || "",
      phone: fields.phone?.toString() || "",
      jobTitle: fields.jobTitle?.toString() || "",
      localisation: fields.localisation?.toString() || "",
      otherInfo: fields.otherInfo?.toString() || "",
      cv: {
        data: cvData,
        contentType: cvFile.mimetype || "application/pdf",
      },
    };

    const newSubmission = new CandidateSubmission(candidateData);
    await newSubmission.save();

    // Ajouter les données du candidat au Google Sheet

    // Chargement des informations d'identification OAuth2 si elles existent déjà
    // const oAuth2Client = loadSavedCredentialsIfExist();

    // Si les informations d'identification sont présentes, envoie les données du candidat à la feuille Google
    // if (oAuth2Client) {
    //   await appendToGoogleSheet(oAuth2Client, candidateData);
    // } else {
    //   // Si l'authentification est requise mais non disponible, affiche un message dans la console
    //   console.log("Authentication required.");
    // }

    res.status(200).json({
      message: "Candidate form submitted successfully",
      id: newSubmission._id,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
