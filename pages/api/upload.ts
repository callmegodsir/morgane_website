import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";
import { Binary } from "mongodb";
import clientPromise from "../../libs/mongodb";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Définir des interfaces pour la typage
interface FormFields {
  title?: string[];
  description?: string[];
}

interface FormFiles {
  image?: formidable.File | formidable.File[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  try {
    const client = await clientPromise;
    const db = client.db();

    // Configuration de formidable
    const form = formidable({
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB max
      filter: ({ mimetype }) => {
        return !!(
          mimetype &&
          (mimetype === "image/png" ||
            mimetype === "image/jpeg" ||
            mimetype === "image/jpg")
        );
      },
    });

    // Parser la requête
    const [fields, files]: [FormFields, FormFiles] = await new Promise(
      (resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) return reject(err);
          resolve([fields as FormFields, files as FormFiles]);
        });
      }
    );

    if (!files.image) {
      return res.status(400).json({ message: "Aucun fichier fourni" });
    }

    const file = Array.isArray(files.image) ? files.image[0] : files.image;
    const fileName = `${Date.now()}-${file.originalFilename}`;

    try {
      // Lire le fichier en binaire
      const fileBuffer = fs.readFileSync(file.filepath);

      // Convertir en format Binary de MongoDB
      const binaryData = new Binary(fileBuffer);

      // Créer l'entrée dans la collection images avec les données binaires
      const newImage = {
        title: fields.title ? fields.title[0] : "Sans titre",
        description: fields.description ? fields.description[0] : "",
        filename: fileName,
        contentType: file.mimetype,
        data: binaryData, // Stocker directement l'image en binaire
        createdAt: new Date(),
      };

      const result = await db.collection("images").insertOne(newImage);

      // Nettoyer le fichier temporaire
      fs.unlinkSync(file.filepath);

      res.status(201).json({
        message: "Fichier téléchargé avec succès",
        image: {
          _id: result.insertedId,
          title: newImage.title,
          description: newImage.description,
          filename: newImage.filename,
          contentType: newImage.contentType,
          createdAt: newImage.createdAt,
        },
      });
    } catch (error) {
      console.error("Erreur lors de l'upload:", error);
      res.status(500).json({ message: "Erreur lors de l'upload de l'image" });
    }
  } catch (error) {
    console.error("Erreur serveur:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
}
