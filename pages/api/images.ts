import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./authentification/[...nextauth]";
import clientPromise from "../../libs/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db();
      const images = await db
        .collection("images")
        .find()
        .sort({ createdAt: -1 })
        .toArray();
      return res.status(200).json(images);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erreur lors de la récupération des images" });
    }
  } else if (req.method === "DELETE" && req.query.id) {
    try {
      const session = await getServerSession(req, res, authOptions);
      if (!session) {
        return res.status(401).json({ message: "Non autorisé" });
      }

      const client = await clientPromise;
      const db = client.db();
      const id =
        typeof req.query.id === "string" ? req.query.id : req.query.id[0];
      await db.collection("images").deleteOne({ _id: new ObjectId(id) });
      return res.status(200).json({ message: "Image supprimée avec succès" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erreur lors de la suppression de l'image" });
    }
  }

  return res.status(405).json({ message: "Méthode non autorisée" });
}
