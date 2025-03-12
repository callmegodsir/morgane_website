import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/libs/dbConnect';
import DocumentModel, { IDocument } from '@/models/Document';
import { getSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    
    // Gérer la requête GET avant la vérification de session
    if (req.method === 'GET') {
      try {
        // Utilisation de any pour contourner les problèmes de type
        const documents = await (DocumentModel as any).find().sort({ uploadDate: -1 }).lean();
        return res.status(200).json(documents);
      } catch (error) {
        console.error("Erreur GET:", error);
        return res
          .status(500)
          .json({ error: 'Erreur lors de la récupération des documents' });
      }
    }
    
    // Vérifier la session pour les autres méthodes
    const session = await getSession({ req });
    if (!session) {
      return res.status(401).json({ error: 'Non autorisé' });
    }

    if (req.method === 'POST') {
      try {
        const { title, filename, metadata } = req.body;
        // Utilisation de any pour contourner les problèmes de type
        const doc = await (DocumentModel as any).create({
          title,
          filename,
          metadata
        });
        return res.status(201).json(doc);
      } catch (error) {
        console.error("Erreur POST:", error);
        return res
          .status(500)
          .json({ error: 'Erreur lors de la création du document' });
      }
    }

    return res.status(405).json({ error: 'Méthode non autorisée' });
  } catch (error) {
    console.error("Erreur générale:", error);
    return res.status(500).json({ error: 'Erreur serveur interne' });
  }
}