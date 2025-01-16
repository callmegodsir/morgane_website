import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header"; // Assurez-vous que le chemin est correct
import Footer from "@/components/Footer"; // Assurez-vous que le chemin est correct
import thinkingMan from "@/public/photo_specialiste78.png"; // Chemin vers l'image de l'homme pensant
import conclusionImage from "@/public/photo_specialiste78deux.png"; // Chemin vers l'image de la conclusion

export default function RecruitmentPage() {
  return (
    <>
      <Head>
        <title>Pourquoi recourir à un cabinet de chasseur de têtes ?</title>
      </Head>
      <Header />
      <div>
        <div className="flex flex-wrap items-center justify-center min-h-screen bg-white p-5">
          <div className="md:flex md:w-full max-w-7xl">
            <div className="md:flex-shrink-0">
              <Image
                src={thinkingMan}
                alt="Chasseur de têtes"
                width={550}
                height={350}
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
              <h1 className="text-xl md:text-2xl font-bold text-[#013B94] mb-4">
                Pourquoi recourir à un cabinet de chasseur de têtes ?
              </h1>
              <ol className="list-decimal pl-5 space-y-2 text-base md:text-lg text-justify">
                <li>
                  Recruter un bon profil est plus difficile que jamais :
                  concurrence des autres entreprises, exigences élevées et
                  variées des candidats sur les profils pénuriques, manque de
                  temps à consacrer au recrutement, etc.
                </li>
                <li>
                  Vous avez essayé de recruter seul et vous n&apos;avez pas
                  encore trouvé votre futur collaborateur : peu de candidatures
                  reçues, entretiens non-satisfaisants, voire propositions
                  d&apos;embauche refusées.
                </li>
                <li>
                  Chasser et qualifier des profils pointus est un métier à part
                  entière.
                </li>
              </ol>
              <br />
              <div className="bg-[#013B94] text-white p-4 rounded-lg mt-2 inline-block text-justify">
                <p className="text-lg">
                  Conclusion : l&apos;approche directe des candidats par un cabinet de
                  recrutement, avec une méthodologie éprouvée, est la meilleure
                  solution pour les métiers en tension où les candidats, peu
                  nombreux et souvent très sollicités, ne répondent pas aux
                  offres d&apos;emplois.
                </p>
              </div>
            </div>
          </div>

          {/* Grande image de conclusion avec texte stylisé */}
        </div>
      </div>
      <Footer />
    </>
  );
}
