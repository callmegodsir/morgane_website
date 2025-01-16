// models/jobOffer.ts
import mongoose from "mongoose";

const jobOfferSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: String, required: true },
    summary: { type: String, required: true },
    details: { type: String, required: true },
    missions: { type: String }, // Ajouté
    profil: { type: String }, // Ajouté
    competences: { type: String }, // Ajouté
    langues: { type: String }, // Ajouté
    contrat: { type: String }, // Ajouté pour préciser le type de contrat (CDI, CDD, Freelance, etc.)
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.JobOffer ||
  mongoose.model("JobOffer", jobOfferSchema);
