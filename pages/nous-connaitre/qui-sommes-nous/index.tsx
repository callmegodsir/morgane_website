import Image from "next/image";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import photo_success from "@/public/photo_success.png"; // Assurez-vous que ce chemin est correct

const Page = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        {/* Titre principal */}
        <h1 className="text-2xl font-semibold text-center text-[#013B94] mt-10">
          Recrutement-Success est spécialisé sur les profils digitaux / IT, les
          métiers du commerce ainsi que l&apos;ensemble des fonctions supports et de
          direction{" "}
        </h1>

        {/* Section des pourcentages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-10">
          <div className="bg-[#013B94] text-white rounded-lg p-6">
            <p className="text-5xl font-bold mb-4">92%</p>
            <p>
              de nos talents sont toujours dans l’entreprise après 1 an, vs 78%
              sur le marché
            </p>
          </div>
          <div className="bg-[#013B94] text-white rounded-lg p-6">
            <p className="text-5xl font-bold mb-4">90%</p>
            <p>
              de nos clients nous recommandent à leurs proches, après la 1ère
              mission réalisée{" "}
            </p>
          </div>
          <div className="bg-[#013B94] text-white rounded-lg p-6">
            <p className="text-5xl font-bold mb-4">75%</p>
            <p>
              des entreprises nous confient au moins une nouvelle mission dans
              les 6 mois.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="my-10">
          <Image
            src={photo_success}
            alt="Success Image"
            layout="responsive"
            width={700}
            height={475}
          />
        </div>

        {/* Section Missions récentes */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-center text-[#013B94]">
            Missions récentes
          </h2>
          <div className="text-lg text-black mt-4 grid grid-cols-2 md:grid-cols-5 gap-4 text-start">
            <div>
              <h3 className="font-semibold">IT</h3>
              <p>Ingénieur homologation</p>
              <p>Architecte Salesforce</p>
              <p>Développeur</p>
              <p>Hotliner</p>
            </div>

            <div>
              <h3 className="font-semibold">IT</h3>
              <p>DSI</p>
              <p>Lead Developer</p>
              <p>Ingénieur sécurité</p>
              <p>Ingénieur logiciel embarqué</p>
            </div>
            <div>
              <h3 className="font-semibold">Ventes</h3>
              <p>Commercial</p>
              <p>Chef de produit junior</p>
              <p>KAM</p>
              <p>Directeur Régional des Ventes</p>
            </div>
            <div>
              <h3 className="font-semibold">Ventes</h3>
              <p>Technico Commercial</p>
              <p>Commercial B2B</p>
              <p>Manager SAV</p>
              <p>Directeur des ventes</p>
            </div>
            <div>
              <h3 className="font-semibold">Et aussi ...</h3>
              <p>Technicien paie</p>
              <p>Juriste droit social</p>
              <p>Contrôleur de gestion</p>
              <p>Responsable Comptable</p>
              <p>Comptable</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
