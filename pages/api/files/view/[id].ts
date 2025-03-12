import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, GridFSBucket } from "mongodb";
import mongoose from 'mongoose';

async function getMongoDBClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI non défini");

  const client = new MongoClient(uri);
  await client.connect();
  return client;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "ID du fichier manquant" });
  }

  let client;

  try {
    client = await getMongoDBClient();
    const db = client.db();
    const bucket = new GridFSBucket(db, { bucketName: "pdfs" });
    
    // Convertir l'ID string en ObjectId
    const objectId = new mongoose.Types.ObjectId(id as string);
    
    // Vérifier d'abord si le fichier existe
    const filesCollection = db.collection("pdfs.files");
    const fileInfo = await filesCollection.findOne({ _id: objectId });
    console.log("ObjectId créé:", objectId);
    if (!fileInfo) {
      return res.status(404).json({ error: "Fichier non trouvé" });
    }
    console.log("Fichier trouvé:", fileInfo);
    
    // Pour les requêtes HEAD, retourner seulement les en-têtes
    if (req.method === 'HEAD') {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Length", fileInfo.length);
      return res.status(200).end();
    }
    
    // Pour les requêtes GET, streamer le fichier
    if (req.method === 'GET') {
      res.setHeader("Content-Type", "application/pdf");
      const downloadStream = bucket.openDownloadStream(objectId);
      
      downloadStream.on('error', (error) => {
        console.error("Erreur de stream:", error);
        // Si l'erreur se produit après que les en-têtes ont été envoyés
        if (!res.headersSent) {
          res.status(500).json({
            error: "Erreur lors du streaming du fichier",
            details: error.message
          });
        } else {
          res.end();
        }
      });
      
      downloadStream.pipe(res);
    } else {
      res.status(405).json({ error: "Méthode non autorisée" });
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du fichier:", error);
    res.status(500).json({
      error: "Erreur lors de la récupération du fichier",
      details: error instanceof Error ? error.message : String(error),
    });
  } finally {
    // Ne fermez pas immédiatement la connexion pour les requêtes GET
    // car cela interromprait le streaming
    if (client && req.method !== 'GET') {
      await client.close();
    }
  }
  // Dans /api/files/[id].ts
console.log("ID reçu:", id);

 // Devrait retourner les métadonnées du fichier
  
}
