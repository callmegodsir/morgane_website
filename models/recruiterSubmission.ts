import mongoose from 'mongoose';

const recruiterSubmissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    firstName: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    yourPost: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true },
    jobTitle: { type: String, required: true },
    descriptionJob: { type: String, required: true },
    document: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.RecruiterSubmission ||
  mongoose.model('RecruiterSubmission', recruiterSubmissionSchema);
