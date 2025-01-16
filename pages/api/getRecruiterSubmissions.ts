// pages/api/getRecruiterSubmissions.ts
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../libs/dbConnect";
import RecruiterSubmission from "../../models/recruiterSubmission";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  try {
    const recruiterSubmissions = await RecruiterSubmission.find({});
    res.status(200).json(recruiterSubmissions);
  } catch (error) {
    console.error("Error fetching recruiter submissions:", error);
    res.status(500).json({ message: "Error fetching recruiter submissions" });
  }
}
