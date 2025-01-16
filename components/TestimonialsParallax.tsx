"use client";

import Testimonial from "./Testimonial";
import { Parallax } from "react-scroll-parallax";

export default function Testimonials() {
  return (
    <div
      id="testimonials"
      className="flex flex-col items-center justify-center bg-white text-black px-8 py-32 xl:px-32 overflow-hidden"
    >
      <h1 className="playfair text-2xl font-bold mb-6">
        Nos réussites, ce sont nos clients qui en parlent le mieux :
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl">
        <div className="xl:row-span-2 xl:row-start-1">
          <Parallax
            translateX={[-25, 0, "easeOutExpo"]}
            translateY={[50, 0, "easeOutExpo"]}
          >
            <Testimonial
              title="Parfait"
              name="P.M"
              position="Patron d’une PME dans l’électronique à Triel (78)"
              description={
                <span style={{ fontStyle: "italic" }}>
                  &quot;Depuis juin 2023, Recrutement-Success est mon cabinet de
                  recrutement.&quot;
                </span>
              }
            />
          </Parallax>
        </div>
        <div className="xl:row-span-2 xl:row-start-2">
          <Parallax
            translateX={[25, 0, "easeOutExpo"]}
            translateY={[50, 0, "easeOutExpo"]}
          >
            <Testimonial
              title="Complétude"
              name="M.F"
              position="Patron d’une PME de Malakoff (92)"
              description={
                <span style={{ fontStyle: "italic" }}>
                  &quot;2 recrutements faits par Agathe, du cabinet
                  Recrutement-Success. Pour la première fois, mon équipe est au
                  complet.&quot;
                </span>
              }
            />
          </Parallax>
        </div>
        <div className="xl:row-span-2">
          <Parallax
            translateX={[-25, 0, "easeOutExpo"]}
            translateY={[50, 0, "easeOutExpo"]}
          >
            <Testimonial
              title="Partenaire recrutement"
              name="Y.L"
              position="Patron d’une PME de 12 personnes basée à Argenteuil (95)"
              description={
                <span style={{ fontStyle: "italic" }}>
                  &quot;3 bons recrutements réalisés avec Recrutement-Success.
                  Depuis Janvier 2024, Recrutement-Success est mon partenaire
                  recrutement.&quot;
                </span>
              }
            />
          </Parallax>
        </div>
        <div className="xl:row-span-2">
          <Parallax
            translateX={[25, 0, "easeOutExpo"]}
            translateY={[50, 0, "easeOutExpo"]}
          >
            <Testimonial
              title="Réactivité"
              name="V.O"
              position="Pharmacienne à Saint-Germain-en-Laye (78)"
              description={
                <span style={{ fontStyle: "italic" }}>
                  &quot;Convaincu par Agathe : ma pharmacienne a commencé 5
                  semaines après avoir signé la mission. Success !&quot;
                </span>
              }
            />
          </Parallax>
        </div>
        <div className="xl:row-span-2">
          <Parallax
            translateX={[-25, 0, "easeOutExpo"]}
            translateY={[50, 0, "easeOutExpo"]}
          >
            <Testimonial
              title="Proactivité"
              name="L.A"
              position="DSI à Guyancourt (78)"
              description={
                <span style={{ fontStyle: "italic" }}>
                  &quot;J’ai trouvé mon Développeur Senior. Recrutement-Success
                  a été très pro avec les candidats et avec la DSI + DRH.&quot;
                </span>
              }
            />
          </Parallax>
        </div>
        <div className="xl:row-span-2">
          <Parallax
            translateX={[25, 0, "easeOutExpo"]}
            translateY={[50, 0, "easeOutExpo"]}
          >
            <Testimonial
              title="Résultats"
              name="O.F-T"
              position="Directeur Technique d’une PME de 20 personnes à Mantes (78)"
              description={
                <span style={{ fontStyle: "italic" }}>
                  &quot;2 techniciens embauchés alors que leurs postes étaient
                  vacants depuis plus d’un an.&quot;
                </span>
              }
            />
          </Parallax>
        </div>
      </div>
    </div>
  );
}
