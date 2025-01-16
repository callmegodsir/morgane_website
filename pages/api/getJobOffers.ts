// pages/api/getJobOffers.ts
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/libs/dbConnect";
import JobOffer from "@/models/jobOffers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  try {
    const jobOffers = await JobOffer.find({});
    res.status(200).json(jobOffers);
  } catch (error) {
    console.error("Error fetching job offers:", error);
    res.status(500).json({ message: "Error fetching job offers" });
  }
}
