import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../libs/dbConnect";
import OffresData from "../../models/OffresData";
import formidable from "formidable";
import fs from "fs/promises";
import { Resend } from "resend";
import { EmailTemplate } from "../../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const form = formidable();
    const [fields, files] = await new Promise<
      [formidable.Fields, formidable.Files]
    >((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    console.log("Fields:", fields); // Debugging fields
    console.log("Files:", files); // Debugging files

    const cvFile = Array.isArray(files.cv) ? files.cv[0] : files.cv;
    if (!cvFile) {
      return res.status(400).json({ message: "CV file is required" });
    }

    const cvData = await fs.readFile(cvFile.filepath);

    const offresData = {
      title: Array.isArray(fields.title) ? fields.title[0] : fields.title,
      contrat: Array.isArray(fields.contrat)
        ? fields.contrat[0]
        : fields.contrat,
      company: Array.isArray(fields.company)
        ? fields.company[0]
        : fields.company,
      location: Array.isArray(fields.location)
        ? fields.location[0]
        : fields.location,
      salary: Array.isArray(fields.salary) ? fields.salary[0] : fields.salary,
      teletravail: Array.isArray(fields.teletravail)
        ? fields.teletravail[0]
        : fields.teletravail,
      summary: Array.isArray(fields.summary)
        ? fields.summary[0]
        : fields.summary,
      details: Array.isArray(fields.details)
        ? fields.details[0]
        : fields.details,
      name: Array.isArray(fields.name) ? fields.name[0] : fields.name,
      firstName: Array.isArray(fields.firstName)
        ? fields.firstName[0]
        : fields.firstName,
      email: Array.isArray(fields.email) ? fields.email[0] : fields.email,
      phone: Array.isArray(fields.phone) ? fields.phone[0] : fields.phone,
      cv: {
        data: cvData,
        contentType: cvFile.mimetype || "application/pdf",
      },
    };

    const newOffre = new OffresData(offresData);
    await newOffre.save();

    // Envoyer l'e-mail de confirmation au candidat
    try {
      if (!offresData.email || !offresData.name) {
        console.error(
          "Email ou prénom manquant, impossible d'envoyer l'e-mail de confirmation"
        );
      } else {
        await resend.emails.send({
          from: "L'équipe de recrutement<onboarding@recrutement-success.com>",
          to: offresData.email,
          subject: `Confirmation de réception de votre candidature pour le poste ${offresData.title}`,
          react: EmailTemplate({
            name: offresData.name,
            title: offresData.title,
          }),
        });
      }
    } catch (error) {
      console.error(
        "Erreur lors de l'envoi de l'e-mail de confirmation :",
        error
      );
      // Vous pouvez décider de l'action à entreprendre en cas d'erreur
      // Par exemple, vous pourriez informer l'utilisateur que sa candidature a été reçue, mais que l'e-mail n'a pas pu être envoyé
    }

    res.status(200).json({
      message: "Offre data submitted successfully",
      id: newOffre._id,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
