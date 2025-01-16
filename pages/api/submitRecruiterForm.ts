import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../libs/dbConnect";
import RecruiterSubmission from "../../models/recruiterSubmission";
import formidable from "formidable";
import fs from "fs/promises";

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

    const documentFile = Array.isArray(files.document) ? files.document[0] : files.document;

    if (!documentFile) {
      return res.status(400).json({ message: "Document is required" });
    }

    const documentData = await fs.readFile(documentFile.filepath);

    const recruiterData = {
      name: Array.isArray(fields.name) ? fields.name[0] : fields.name,
      firstName: Array.isArray(fields.firstName)
        ? fields.firstName[0]
        : fields.firstName,
      company: Array.isArray(fields.company) ? fields.company[0] : fields.company,
      yourPost: Array.isArray(fields.yourPost) ? fields.yourPost[0] : fields.yourPost,
      email: Array.isArray(fields.email) ? fields.email[0] : fields.email,
      phone: Array.isArray(fields.phone) ? fields.phone[0] : fields.phone,
      jobTitle: Array.isArray(fields.jobTitle) ? fields.jobTitle[0] : fields.jobTitle,
      descriptionJob: Array.isArray(fields.descriptionJob)
        ? fields.descriptionJob[0]
        : fields.descriptionJob,
      document: {
        data: documentData,
        contentType: documentFile.mimetype || "application/pdf",
      },
    };

    const newRecruiterSubmission = new RecruiterSubmission(recruiterData);
    await newRecruiterSubmission.save();

    res.status(200).json({
      message: "Recruiter form submitted successfully",
      id: newRecruiterSubmission._id,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
