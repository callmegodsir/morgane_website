// pages/api/getOffresDataCV.ts
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import dbConnect from "../../libs/dbConnect";
import OffresData from "../../models/OffresData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  // Récupérer le paramètre id en s'assurant qu'il est une chaîne
  const { id } = req.query;
  const idString = Array.isArray(id) ? id[0] : id;

  // Vérifier si l'id est valide
  if (!mongoose.Types.ObjectId.isValid(idString)) {
    console.error(`Invalid ID: ${idString}`);
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    // Inclure explicitement cv.data
    const offreData = await OffresData.findById(idString).select('+cv.data');

    if (!offreData) {
      console.error(`No offreData found for ID: ${idString}`);
      return res.status(404).json({ message: "CV not found" });
    }

    if (!offreData.cv || !offreData.cv.data) {
      console.error(`No CV data found for ID: ${idString}`);
      return res.status(404).json({ message: "CV not found" });
    }

    console.log(`Sending CV for ID: ${idString}`);

    res.setHeader("Content-Type", offreData.cv.contentType || "application/octet-stream");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="cv-${idString}.pdf"`
    );
    res.send(offreData.cv.data);
  } catch (error) {
    console.error("Error fetching CV:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
