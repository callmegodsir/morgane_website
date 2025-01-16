import Image from "next/image";
import React from "react";
import homepage from "@/public/photo_homepage.jpg";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <main className="  overflow-y-auto">
      {/* Section de l'image avec phrase */}
      <div className="relative w-full" style={{ height: "60vh" }}>
        <Image
          src={homepage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 flex justify-center items-center mt-20">
          <h1
            className="text-lg sm:text-sm md:text-4xl font-semibold text-[#013B94] bg-clip-text text-center mt-20"
            style={{ backdropFilter: "blur(5px)" }}
          >
            Trait d&apos;union entre le recrutement et votre succès
          </h1>
        </div>
      </div>

      {/* Section des pourcentages avec fond bleu */}
      <div className="bg-[#013B94] text-white py-10">
        {" "}
        {/* Ajustez py pour l'espacement vertical */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="px-4">
              <CountUp
                delay={0.3}
                end={82}
                prefix=""
                suffix="%"
                className="text-5xl font-bold"
              />
              <p className="mt-8 text-justify">
                des entreprises estiment recruter plus rapidement en passant par
                un cabinet
              </p>
            </div>

            <div className="px-4">
              <CountUp
                delay={0.5}
                end={80}
                prefix=""
                suffix="%"
                className="text-5xl font-bold"
              />
              <p className="mt-8 text-justify">
                de nos recrutements sont effectués en moins de 3 mois
              </p>
            </div>
            <div className="px-4">
              <CountUp
                delay={0.5}
                end={75}
                prefix=""
                suffix="%"
                className="text-5xl font-bold"
              />
              <p className="mt-8 text-justify">
                des entreprises nous confient une nouvelle mission dans les 6
                mois
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
