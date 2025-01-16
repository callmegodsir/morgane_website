// pages/api/getCandidateSubmissions.ts
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../libs/dbConnect";
import CandidateSubmission from "../../models/candidateSubmission";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  try {
    const candidateSubmissions = await CandidateSubmission.find({});
    res.status(200).json(candidateSubmissions);
  } catch (error) {
    console.error("Error fetching candidate submissions:", error);
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
}
