// pages/api/send.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { name, title, email } = req.body;

  if (!name || !title || !email) {
    return res.status(400).json({ message: "Paramètres manquants" });
  }

  try {
    const data = await resend.emails.send({
      from: "L'équipe de recrutement<onboarding@recrutement-success.com>",
      to: [email],
      subject: `Confirmation de réception de votre candidature pour le poste ${title}`,
      react: EmailTemplate({ name, title }),
    });

    res.status(200).json({ message: "E-mail envoyé avec succès", data });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
    res
      .status(500)
      .json({ message: "Erreur lors de l'envoi de l'e-mail", error });
  }
};
