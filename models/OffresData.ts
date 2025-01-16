import mongoose from "mongoose";

const offresDataSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    contrat: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: String, required: true },
    teletravail: { type: String, required: true },
    summary: { type: String, required: true },
    details: { type: String, required: true },
    name: { type: String, required: true },
    firstName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    cv: {
      data: { type: Buffer, select: false }, // Exclure par défaut
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.OffresData ||
  mongoose.model("OffresData", offresDataSchema);
