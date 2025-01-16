import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../libs/dbConnect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  try {
    res.status(200).json({ message: "Connected to MongoDB successfully!" });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ message: "Error connecting to MongoDB" });
  }
}
