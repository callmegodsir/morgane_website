import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

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
  let client;

  try {
    client = await getMongoDBClient();
    const db = client.db();
    
    // Récupérer les fichiers depuis la collection fs.files de GridFS
    const filesCollection = db.collection("pdfs.files");
    const files = await filesCollection.find({}).toArray();
    
    res.status(200).json(files);
  } catch (error) {
    console.error("Erreur lors de la récupération des fichiers:", error);
    res.status(500).json({
      error: "Erreur lors de la récupération des fichiers",
      details: error instanceof Error ? error.message : String(error),
    });
  } finally {
    if (client) {
      await client.close();
    }
  }
}