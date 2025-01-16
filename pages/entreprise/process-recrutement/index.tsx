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
    titre: "1) Échange approfondi sur le poste et la culture d'entreprise",
    duration: "",
    desc: [""],
  },
  {
    id: 2,
    titre: "2) Conception d'un argumentaire pour convaincre le candidat",
    duration: "",
    desc: [""],
  },
  {
    id: 3,
    titre: "3)  Sourcing (CVthèque du cabinet + réseaux professionnels)",
    duration: "",
    desc: [""],
  },
  {
    id: 4,
    titre: "4) Préqualification téléphonique + Approche directe / Chasse",
    duration: "",
    desc: [""],
  },
  {
    id: 5,
    titre: "5) Entretien et évaluation avec le cabinet",
    duration: "",
    desc: [""],
  },

  {
    id: 6,
    titre: "6) Présentation des candidats à l'entreprise",
    duration: "",
    desc: [""],
  },
  {
    id: 7,
    titre: "7) Entretien entre l'entreprise et les candidats short-listés",
    duration: "",
    desc: [""],
  },
  {
    id: 8,
    titre: "8) Debriefing entreprise / cabinet / candidats",
    duration: "",
    desc: [""],
  },
  {
    id: 9,
    titre: "9) Contrôle de référence",
    duration: "",
    desc: [""],
  },

  {
    id: 10,
    titre: "10) Proposition du contrat de travail / négociation de salaire",
    duration: "",
    desc: [""],
  },
  {
    id: 11,
    titre: "11) Suivi de l'intégration",
    duration: "",
    desc: [""],
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
