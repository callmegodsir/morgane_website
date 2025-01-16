import Image from "next/image";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import imageEcoute from "@/public/photo_nous_connaitre1.png"; // Remplacez par le chemin correct de votre image
import imageTransparence from "@/public/photo_nous_connaitre2.png"; // Remplacez par le chemin correct de votre image
import imageConfidentialite from "@/public/photo_nous_connaitre3.png"; // Remplacez par le chemin correct de votre image

const NewPage = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        {/* Titre principal */}
        <h1 className="text-4xl font-semibold text-center text-[#013B94] mt-10">
          Nos valeurs
        </h1>

        {/* Section des engagements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-10">
          {/* Ecoute */}
          <div className="relative">
            <Image
              src={imageEcoute}
              alt="Ecoute"
              layout="responsive"
              width={300}
              height={500}
            />
            <div className="absolute inset-0 flex flex-col justify-end items-center text-white p-6 bg-black bg-opacity-50">
              <h2 className="text-3xl font-bold">ECOUTE</h2>
              <p className="mt-4 text-justify">
                Nous connaissons notre métier, vous connaissez le vôtre :
                racontez-le nous en détail afin que nous soyons votre meilleur
                ambassadeur.
              </p>
            </div>
          </div>

          {/* Transparence */}
          <div className="relative">
            <Image
              src={imageTransparence}
              alt="Transparence"
              layout="responsive"
              width={300}
              height={500}
            />
            <div className="absolute inset-0 flex flex-col justify-end items-center text-white p-6 bg-black bg-opacity-50">
              <h2 className="text-3xl font-bold">TRANSPARENCE</h2>
              <p className="mt-4 text-justify">
                Transparence sur les coûts et le suivi de chaque mission.
              </p>
            </div>
          </div>

          {/* Confidentialité */}
          <div className="relative">
            <Image
              src={imageConfidentialite}
              alt="Confidentialité"
              layout="responsive"
              width={300}
              height={500}
            />
            <div className="absolute inset-0 flex flex-col justify-end items-center text-white p-6 bg-black bg-opacity-50">
              <h2 className="text-3xl font-bold">CONFIDENTIALITE</h2>
              <p className="mt-4 text-justify">
                Respect de la vie privée de chaque candidat ainsi que des
                échanges avec les entreprises.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewPage;
