// pages/api/getOffresData.ts
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../libs/dbConnect";
import OffresData from "../../models/OffresData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  try {
    const offresData = await OffresData.find({}).select('-cv.data');
    res.status(200).json(offresData);
  } catch (error) {
    console.error("Error fetching offres data:", error);
    res.status(500).json({ message: "Error fetching offres data" });
  }
}
