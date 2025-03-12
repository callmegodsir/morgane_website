import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, GridFSBucket } from "mongodb";
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';

// Fonction pour se connecter à MongoDB
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
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  let client;

  try {
    // 1. Réception du fichier PDF (via formidable ou autre middleware)
    // Note: Cette partie dépend de comment vous gérez l'upload de fichiers
    
    // Supposons que vous avez déjà le fichier PDF uploadé et stocké dans GridFS
    // avec son ID dans req.body.fileId
    
    const { fileId, title } = req.body;
    
    if (!fileId) {
      return res.status(400).json({ error: "ID du fichier manquant" });
    }
    
    client = await getMongoDBClient();
    const db = client.db();
    
    // 2. Récupérer le fichier depuis GridFS
    const bucket = new GridFSBucket(db, { bucketName: "pdfs" });
    const objectId = new mongoose.Types.ObjectId(fileId);
    
    // Vérifier que le fichier existe
    const filesCollection = db.collection("pdfs.files");
    const fileInfo = await filesCollection.findOne({ _id: objectId });
    
    if (!fileInfo) {
      return res.status(404).json({ error: "Fichier non trouvé" });
    }
    
    // 3. Sauvegarder le fichier dans le dossier public de Next.js
    const fileName = title ? `${title.replace(/\s+/g, '-').toLowerCase()}.pdf` : fileInfo.filename;
    const publicPath = path.join(process.cwd(), 'public', 'pdfs');
    
    // Créer le dossier s'il n'existe pas
    if (!fs.existsSync(publicPath)) {
      fs.mkdirSync(publicPath, { recursive: true });
    }
    
    const filePath = path.join(publicPath, fileName);
    const writeStream = fs.createWriteStream(filePath);
    const readStream = bucket.openDownloadStream(objectId);
    
    // Utiliser pipeline pour gérer correctement les flux
    await pipeline(readStream, writeStream);
    
    // 4. Ajouter l'entrée dans un fichier JSON qui servira de "base de données" statique
    const dbPath = path.join(process.cwd(), 'public', 'pdfs', 'database.json');
    let pdfDatabase = [];
    
    if (fs.existsSync(dbPath)) {
      const dbContent = fs.readFileSync(dbPath, 'utf8');
      pdfDatabase = JSON.parse(dbContent);
    }
    
    // Ajouter l'entrée du nouveau PDF
    pdfDatabase.push({
      id: fileId,
      filename: fileName,
      title: title || fileInfo.filename,
      path: `/pdfs/${fileName}`,
      uploadDate: new Date().toISOString(),
      length: fileInfo.length
    });
    
    // Écrire le fichier JSON mis à jour
    fs.writeFileSync(dbPath, JSON.stringify(pdfDatabase, null, 2), 'utf8');
    
    res.status(200).json({ 
      success: true, 
      message: "PDF intégré avec succès",
      pdfUrl: `/pdfs/${fileName}`
    });
    
  } catch (error) {
    console.error("Erreur lors de l'intégration du PDF:", error);
    res.status(500).json({
      error: "Erreur lors de l'intégration du PDF",
      details: error instanceof Error ? error.message : String(error),
    });
  } finally {
    if (client) {
      await client.close();
    }
  }
}