import mongoose, { Schema } from 'mongoose';

// Définir l'interface sans étendre Document
export interface IDocument {
  title: string;
  filename: string;
  uploadDate: Date;
  metadata?: {
    title?: string;
  };
}

const DocumentSchema = new Schema<IDocument>({
  title: { type: String, required: true },
  filename: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
  metadata: {
    title: { type: String },
  },
});

// Utiliser le modèle avec le type générique
const DocumentModel = mongoose.models.Document || 
  mongoose.model<IDocument>('Document', DocumentSchema);

export default DocumentModel;