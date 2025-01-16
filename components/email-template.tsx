// components/email-template.tsx
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  title: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  title,
}) => (
  <div>
    <p>Bonjour {name},</p>
    <p>
      Nous vous remercions de l&apos;intérêt que vous manifestez pour le poste de{" "}
      <strong>{title}</strong>. Nous étudions les candidatures dans un délai
      maximum d&apos;un mois. Au-delà de ce délai, si vous n’avez pas été contacté,
      cela signifiera que nous ne pouvons donner suite à votre candidature. Nous
      vous remercions cependant du temps que vous nous avez consacré et vous
      souhaitons bonne continuation dans votre évolution professionnelle.
    </p>
    <p>
      Cordialement,
      <br />
      Le cabinet Recrutement-Success
    </p>
  </div>
);
