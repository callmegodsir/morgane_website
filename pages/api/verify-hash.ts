import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../libs/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { hash } = req.query;

  if (!hash || typeof hash !== "string") {
    return res.status(400).json({ message: "Hash manquant ou invalide" });
  }

  try {
    const client = await clientPromise;
    const db = client.db();

    // Rechercher le hash dans la collection des admins
    const admin = await db.collection("admins").findOne({
      accessHash: hash,
      isActive: true,
    });

    if (!admin) {
      return res.status(401).json({ message: "Hash invalide ou expiré" });
    }

    // Si le hash est valide, on renvoie un succès
    return res.status(200).json({
      message: "Hash valide",
      adminId: admin._id.toString(),
    });
  } catch (error) {
    console.error("Erreur lors de la vérification du hash:", error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
}
