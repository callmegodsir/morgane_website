// pages/api/dashboard_bdd/addItem.ts
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../libs/dbConnect";
import JobOffer from "../../../models/jobOffers";
import RecruiterSubmission from "../../../models/recruiterSubmission";
import CandidateSubmission from "../../../models/candidateSubmission";
import OffresData from "../../../models/OffresData";

const modelsMap: Record<string, any> = {
  jobOffers: JobOffer,
  recruiterSubmissions: RecruiterSubmission,
  candidateSubmissions: CandidateSubmission,
  offresData: OffresData,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { db, data } = req.body;

  const Model = modelsMap[db];

  if (!Model) {
    return res.status(400).json({ message: "Invalid database" });
  }

  // Exclure les champs automatiques
  const { _id, createdAt, updatedAt, __v, ...cleanedData } = data;

  try {
    const newItem = new Model(cleanedData);
    await newItem.save();
    res.status(200).json(newItem);
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ message: "Error adding item" });
  }
}
