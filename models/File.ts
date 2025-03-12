import mongoose, { Schema, Document } from "mongoose";

export interface IFile extends Document {
  filename: string;
  title: string;
  uploadDate: Date;
  metadata?: {
    description?: string;
  };
}

const FileSchema: Schema = new Schema({
  filename: { type: String, required: true },
  title: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
  metadata: {
    description: { type: String },
  },
});

export default mongoose.models.File ||
  mongoose.model<IFile>("File", FileSchema);
