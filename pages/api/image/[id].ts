import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import clientPromise from "../../../libs/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  try {
    const { id } = req.query;
    const client = await clientPromise;
    const db = client.db();

    // Récupérer l'image depuis MongoDB
    const image = await db.collection("images").findOne({
      _id: new ObjectId(id as string),
    });

    if (!image || !image.data) {
      return res.status(404).json({ message: "Image non trouvée" });
    }

    try {
      // Configurer les headers de la réponse
      res.setHeader("Content-Type", image.contentType || "image/png");
      res.setHeader("Cache-Control", "public, max-age=31536000");

      // Convertir les données binaires en Buffer
      const buffer = Buffer.from(image.data.buffer);

      // Envoyer l'image
      res.send(buffer);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'image:", error);
      res.status(500).json({ message: "Erreur lors de l'envoi de l'image" });
    }
  } catch (error) {
    console.error("Erreur serveur:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
}
