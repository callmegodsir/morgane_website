import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../libs/dbConnect";
import CandidateSubmission from "../../models/candidateSubmission";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { id } = req.query;

  try {
    const candidate = await CandidateSubmission.findById(id);

    if (!candidate || !candidate.cv || !candidate.cv.data) {
      return res.status(404).json({ message: "CV not found" });
    }

    res.setHeader("Content-Type", candidate.cv.contentType);
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="cv-${id}.pdf"`
    );
    res.send(candidate.cv.data);
  } catch (error) {
    console.error("Error fetching CV:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
