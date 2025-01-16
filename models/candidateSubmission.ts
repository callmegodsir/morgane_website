import mongoose from "mongoose";

const candidateSubmissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    firstName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    company: { type: String, trim: true },
    phone: { type: String, required: true },
    jobTitle: { type: String, required: true },
    localisation: { type: String, required: true },
    otherInfo: { type: String },
    cv: {
      data: { type: Buffer, required: true },
      contentType: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.CandidateSubmission ||
  mongoose.model("CandidateSubmission", candidateSubmissionSchema);
