import photo_cout_recrutement from "@/public/photo_coutrecrutement.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header />
      <div className="relative z-10 mx-auto flex flex-col gap-5 max-w-7xl p-6">
        <h1 className="text-4xl font-semibold text-center text-[#013B94] mt-10">
          Un pricing transparent et au succès uniquement
        </h1>
        <p className="text-lg text-black leading-relaxed text-start mt-6">
          Les retours de nos clients sont clairs : vous êtes fatigués des prix
          exorbitants des grands cabinets et du manque de transparence sur les
          prix … de presque tous les cabinets de recrutements.
        </p>
        <p className="text-lg text-black leading-relaxed text-center mt-6">
          C&apos;est pourquoi nous proposons :
        </p>
        <div className="my-6 flex flex-wrap md:flex-nowrap gap-4">
          <div className="w-full md:w-1/4 px-2 text-center bg-[#013B94] text-white rounded-lg p-6">
            <p className="text-4xl font-semibold mb-4">1</p>
            <div>
              <strong>Prix d&apos;une mission :</strong> <br /> 20% de la
              rémunération annuelle brute (fixe + variable)
            </div>
          </div>
          <div className="w-full md:w-1/4 px-2 text-center bg-[#013B94] text-white rounded-lg p-6">
            <p className="text-4xl font-semibold mb-4">2</p>
            <div>
              <strong>Fonctionnement au succès : </strong> si vous ne recrutez
              pas, vous ne payez pas !
            </div>
          </div>
          <div className="w-full md:w-1/4 px-2 text-center bg-[#013B94] text-white rounded-lg p-6">
            <p className="text-4xl font-semibold mb-4">3</p>
            <div>
              <strong>Garantie de remplacement </strong>sur l&apos;ensemble de
              la période d&apos;essai
            </div>
          </div>
          <div className="w-full md:w-1/4 px-2 text-center bg-[#013B94] text-white rounded-lg p-6">
            <p className="text-4xl font-semibold mb-4">4</p>
            <div>
              <strong>Pas de frais cachés </strong>(annonces, déplacements,
              frais administratifs).
            </div>
          </div>
        </div>
        <div className="my-6">
          <Image
            src={photo_cout_recrutement}
            alt="Team"
            layout="responsive"
            width={700}
            height={475}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
