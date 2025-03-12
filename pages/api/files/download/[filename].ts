import { NextApiRequest, NextApiResponse } from "next";
import  getMongoClient  from "@/libs/dbConnect";
import { GridFSBucket } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { filename } = req.query;
  const client = await getMongoClient();
  const db = client.db();

  try {
    const bucket = new GridFSBucket(db, { bucketName: "pdfs" });
    const downloadStream = bucket.openDownloadStreamByName(filename as string);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
    downloadStream.pipe(res);
  } catch (error) {
    res.status(404).json({ error: "Fichier non trouvé" });
  }
}
