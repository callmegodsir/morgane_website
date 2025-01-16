// pages/api/getRecruiterDocument.ts
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../libs/dbConnect";
import RecruiterSubmission from "../../models/recruiterSubmission";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { id } = req.query;

  try {
    const recruiter = await RecruiterSubmission.findById(id);

    if (!recruiter || !recruiter.document || !recruiter.document.data) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.setHeader("Content-Type", recruiter.document.contentType);
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="document-${id}.pdf"`
    );
    res.send(recruiter.document.data);
  } catch (error) {
    console.error("Error fetching recruiter document:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
