// pages/api/updateItem.ts
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

  const { db, id, data } = req.body;

  const Model = modelsMap[db];

  if (!Model) {
    return res.status(400).json({ message: "Invalid database" });
  }

  try {
    const updatedItem = await Model.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json(updatedItem);
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).json({ message: "Error updating item" });
  }
}
