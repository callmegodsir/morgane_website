// app/partenaires/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

// Import manuel de toutes les images
import Logo1 from "@/public/partenaires/logo-1.webp";
import Logo2 from "@/public/partenaires/logo-2.webp";
import Logo3 from "@/public/partenaires/logo-3.webp";
import Logo4 from "@/public/partenaires/logo-4.webp";
import Logo5 from "@/public/partenaires/logo-5.webp";
import Logo6 from "@/public/partenaires/logo-6.webp";
import Logo7 from "@/public/partenaires/logo-7.webp";
import Logo8 from "@/public/partenaires/logo-8.webp";
import Logo9 from "@/public/partenaires/logo-9.webp";
import Logo10 from "@/public/partenaires/logo-10.webp";
import Logo11 from "@/public/partenaires/logo-11.webp";
import Logo12 from "@/public/partenaires/logo-12.webp";
import Logo13 from "@/public/partenaires/logo-13.webp";
import Logo14 from "@/public/partenaires/logo-14.webp";
import Logo15 from "@/public/partenaires/logo-15.webp";

const Partenaires = () => {
  // Sections principales
  const sections = [
    {
      title:
        "Private Equity : Maximisez vos investissements avec les leaders du marché",
      content:
        "Nous travaillons avec des acteurs majeurs du private equity, réputés pour leur expertise et leurs performances exceptionnelles. Nos partenaires incluent :",
    },
    {
      title:
        "Assurantiel : Protégez votre avenir avec des partenaires de confiance",
      content:
        "La protection de votre patrimoine et de votre avenir passe par des solutions assurantielles performantes en France et au Luxembourg. Nous collaborons avec :",
    },
    {
      title:
        "Fiscalite : Des solutions pour alléger vos charges et maximiser vos revenus",
      content:
        "Grâce à nos partenaires, nous vous offrons des dispositifs innovants pour optimiser votre fiscalité :",
    },
    {
      title:
        "Immobilier & SCPI : Des investissements immobiliers accessibles et performants",
      content:
        "Pour diversifier votre patrimoine grâce à l'immobilier : Monuments Historiques, Malraux, Démembrement de propriété, SCPI…",
    },
    {
      title:
        "Cryptomonnaies : Le choix d'un partenaire en cryptomonnaies : une décision réfléchie",
      content:
        "Dans un domaine aussi exigeant et en constante évolution que celui des cryptomonnaies, choisir un partenaire de confiance n'est pas une tâche aisée. Cela demande une évaluation minutieuse des performances, une transparence irréprochable, et un respect rigoureux des réglementations en vigueur. Après une analyse approfondie, notre choix s'est porté sur Mon Livret C, non seulement pour ses performances exceptionnelles, mais également pour la solidité de ses engagements en matière de conformité. Mon Livret C s'est distingué en réussissant avec brio plusieurs contrôles menés par l'Autorité des Marchés Financiers (AMF). Ces audits rigoureux attestent de sa fiabilité, de sa conformité aux standards les plus élevés, et de son engagement envers la protection des utilisateurs. Ce double critère de performance et de sécurité a été déterminant dans notre décision. En collaborant avec Mon Livret C, nous sommes convaincus de pouvoir offrir à nos clients une expérience alliant innovation, stabilité, et sérénité, tout en respectant les réglementations du marché.",
    },
  ];

  // Liste des logos avec imports directs
  const partnerLogos = [
    { id: 1, src: Logo1, alt: "Partenaire 1" },
    { id: 2, src: Logo2, alt: "Partenaire 2" },
    { id: 3, src: Logo3, alt: "Partenaire 3" },
    { id: 4, src: Logo4, alt: "Partenaire 4" },
    { id: 5, src: Logo5, alt: "Partenaire 5" },
    { id: 6, src: Logo6, alt: "Partenaire 6" },
    { id: 7, src: Logo7, alt: "Partenaire 7" },
    { id: 8, src: Logo8, alt: "Partenaire 8" },
    { id: 9, src: Logo9, alt: "Partenaire 9" },
    { id: 10, src: Logo10, alt: "Partenaire 10" },
    { id: 11, src: Logo11, alt: "Partenaire 11" },
    { id: 12, src: Logo12, alt: "Partenaire 12" },
    { id: 13, src: Logo13, alt: "Partenaire 13" },
    { id: 14, src: Logo14, alt: "Partenaire 14" },
    { id: 15, src: Logo15, alt: "Partenaire 15" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          "Une alliance d'excellence pour vos investissements"
        </h1>

        {/* Sections thématiques */}
        <div className="space-y-16 mt-12">
          {sections.map((section, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-6">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-600 max-w-3xl">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Grille de logos */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Nos partenaires institutionnels
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {partnerLogos.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-32"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain max-h-16"
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contenu additionnel */}
        <div className="mt-20 space-y-16">
          <div className="text-center">
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              "Chez MPV INVEST, nous collaborons avec des partenaires de renom
              pour offrir les meilleures solutions d'investissement. Ces
              alliances stratégiques nous permettent de vous proposer des
              opportunités exclusives adaptées à vos objectifs."
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Engagement qualité</h3>
            <p className="text-gray-600">
              "Tous nos partenaires sont sélectionnés selon des critères stricts
              de performance, transparence et conformité réglementaire."
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Partenaires;
