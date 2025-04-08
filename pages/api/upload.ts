import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import clientPromise from '../../libs/mongodb';
import { ObjectId } from 'mongodb';

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

interface ImageDocument {
  title: string;
  description: string;
  filename: string;
  path: string;
  createdAt: Date;
  _id?: ObjectId;
}

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

// Assurer que le répertoire d'upload existe
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  try {
    // Connexion à la base de données
    const client = await clientPromise;
    const db = client.db();
    
    // Configuration de formidable
    const options: formidable.Options = {
      uploadDir: uploadDir,
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB max
      filter: ({ name, originalFilename, mimetype }) => {
        // Accepter PNG, PDF, JPEG
        return !!(mimetype && (
          mimetype === 'image/png' || 
          mimetype === 'application/pdf' || 
          mimetype === 'image/jpeg' || 
          mimetype === 'image/jpg'
        ));
      }
    };

    // Parser la requête avec promisify
    const [fields, files]: [FormFields, FormFiles] = await new Promise((resolve, reject) => {
      const form = formidable(options);
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve([fields as FormFields, files as FormFiles]);
      });
    });

    if (!files.image) {
      return res.status(400).json({ message: "Aucun fichier fourni" });
    }

    const file = Array.isArray(files.image) ? files.image[0] : files.image;
    const fileName = `${Date.now()}-${file.originalFilename}`;
    const newPath = path.join(uploadDir, fileName);

    try {
      // Renommer le fichier
      fs.renameSync(file.filepath, newPath);

      // Créer le document pour la base de données
      const newImage: ImageDocument = {
        title: fields.title ? fields.title[0] : 'Sans titre',
        description: fields.description ? fields.description[0] : '',
        filename: fileName,
        path: `/uploads/${fileName}`,
        createdAt: new Date()
      };

      // Insérer dans la collection
      const result = await db.collection('images').insertOne(newImage);
      
      // Créer un objet de réponse avec l'ID
      const responseImage = {
        ...newImage,
        _id: result.insertedId
      };
      
      res.status(201).json({ 
        message: "Fichier téléchargé avec succès", 
        image: responseImage 
      });
    } catch (error) {
      console.error("Erreur lors de l'enregistrement:", error);
      res.status(500).json({ message: "Erreur lors de l'enregistrement" });
    }
  } catch (error) {
    console.error("Erreur serveur:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
}