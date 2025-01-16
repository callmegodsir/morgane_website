import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Experience {
  id: number;
  titre: string;
  duration: string;
  desc: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    titre: "1) Présélection téléphonique",
    duration: "",
    desc: [
      "Si votre CV répond aux attentes de l'entreprise, nous vous contactons par téléphone pour échanger sur vos aspirations professionnelles.",
    ],
  },
  {
    id: 2,
    titre: "2) Entretien",
    duration: "",
    desc: [
      "Entretien complet avec un de nos consultants en présentiel de préférence, au sujet de votre parcours et vos ambitions professionnelles.",
    ],
  },
  {
    id: 3,
    titre: "3) Test",
    duration: "",
    desc: [
      "Pour certains postes, le candidat passe un test technique et/ou test de personnalité.",
    ],
  },
  {
    id: 4,
    titre: "4) Contrôle de références",
    duration: "",
    desc: ["Entretien téléphonique avec vos anciens N+1, pairs ou N-1."],
  },
  {
    id: 5,
    titre: "5) Présentation de votre candidature à l'entreprise",
    duration: "",
    desc: [
      "Nous présentons votre candidature à l'entreprise si elle correspond à leurs attentes.",
    ],
  },
  {
    id: 6,
    titre: "6) Entretien avec l'entreprise",
    duration: "",
    desc: [
      "Entretien avec les responsables de l'entreprise. Discussion sur votre parcours et vos ambitions professionnelles.",
    ],
  },
  {
    id: 7,
    titre: "7) Feedback",
    duration: "",
    desc: ["Retour sur les entretiens et les prochaines étapes."],
  },
  {
    id: 8,
    titre: "8) Proposition d'embauche",
    duration: "",
    desc: [
      "Si vous êtes sélectionné, vous recevrez une proposition d'embauche. Nous vous accompagnons tout au long du processus.",
    ],
  },
];

const ExperienceCard: React.FC<Experience> = ({
  id,
  titre,
  desc,
  duration,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const comingFromLeft = id % 2 !== 0;
  const comingFromRight = !comingFromLeft;

  const cardVariants = {
    hidden: { x: comingFromLeft ? -300 : 300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const descriptionText = desc.join(" ");

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`mb-6 md:mb-8 w-full flex justify-center ${
        comingFromLeft ? "lg:justify-start" : "lg:justify-end"
      }`}
    >
      <div
        className={`bg-white p-6 rounded-lg shadow-lg w-full lg:w-8/12 max-w-4xl`}
      >
        <h3 className="mb-3 font-bold text-[#013B94] text-xl">{titre}</h3>
        <p className="text-sm font-semibold">{duration}</p>
        <p className="text-sm mt-4">{descriptionText}</p>
      </div>
    </motion.div>
  );
};

const Page: React.FC = () => {
  return (
    <div className="bg-[#E6E6E6] min-h-screen">
      <Header />
      <div className="mt-10 p-4">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} {...exp} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
