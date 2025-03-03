import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import homepage from "@/public/nossolution.webp";
const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* En-tête Solutions */}
      <div className="py-12 bg-white">
        <h1 className="text-5xl font-bold text-black text-center">
          Nos solutions
        </h1>
      </div>

      {/* Contenu Solutions */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Colonne de gauche avec l&apos;image */}
            <div className="relative h-[600px]">
              <Image
                src={homepage}
                alt="Nos solutions"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Colonne de droite avec les textes */}
            <div className="prose-xl flex flex-col justify-center">
              <p className="text-xl mb-8">
                Dans notre cabinet, nous adoptons une approche unique et
                personnalisée, axée sur les spécificités de chaque client.
                Chaque collaboration débute par un audit approfondi des besoins,
                des ambitions et des enjeux spécifiques de nos partenaires. Ce
                diagnostic initial nous permet de co-construire des solutions
                sur mesure, alignées sur vos objectifs stratégiques, tout en
                intégrant des recommandations visant à anticiper et à lever
                d&apos;éventuelles zones de vigilance. Grâce à votre expertise
                et à notre méthode d&apos;accompagnement, nous visons à
                maximiser votre impact dans des environnements où
                l&apos;excellence opérationnelle et le service client sont
                essentiels.
              </p>
              <p className="text-xl">
                Nous sommes un cabinet engagé dans l&apos;accompagnement
                stratégique de nos clients, avec une approche globale et sur
                mesure pour répondre à des besoins diversifiés en création de
                valeur, transmission patrimoniale et optimisation des actifs.
                Notre expertise s&apos;appuie sur une gamme étendue de solutions
                adaptées :
              </p>
            </div>
          </div>

          <div className="prose-xl">
            <div className="space-y-20">
              {/* Section 1 */}
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-8">
                    Création sociétale, avec une structuration stratégique et
                    personnalisée d&apos;entreprises.
                  </h2>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-8">
                    Préparation successorale et accompagnement dans les projets
                    de transmission patrimoniale.
                  </h2>
                </div>
              </div>

              {/* Section 2 */}
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-8">
                    Création de revenus complémentaires, placements financiers
                    transparents et gestion d&apos;actifs avec une clarté totale sur
                    notre rémunération.
                  </h2>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-8">
                    Assurantiels, pour protéger efficacement le patrimoine et
                    sécuriser les actifs.
                  </h2>
                </div>
              </div>

              {/* Section 3 */}
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-8">
                    Private equity, permettant une diversification stratégique
                    des investissements.
                  </h2>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-8">
                    Optimisation fiscale, notamment via le Girardin industriel,
                    les investissements en bois et forêts, et d&apos;autres
                    dispositifs adaptés.
                  </h2>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-8">
                    Innovations financières, avec une expertise ouverte sur les
                    opportunités offertes par les cryptoactifs.
                  </h2>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-8">
                    Immobilier spécialisé, incluant les dispositifs Malraux,
                    monuments historiques, démembrement, SCPI et stratégies
                    personnalisées.
                  </h2>
                </div>
              </div>
            </div>
            <div>
              Notre démarche repose sur un audit initial précis, visant à
              comprendre vos ambitions, identifier vos priorités et anticiper
              les éventuelles zones de vigilance. Cette analyse approfondie nous
              permet de bâtir des solutions parfaitement alignées sur vos
              besoins, tout en garantissant une transparence totale et une
              rigueur exemplaire. Avec nous, chaque projet est une opportunité
              de conjuguer sécurité, performance et innovation, pour bâtir un
              avenir durable et aligné sur vos aspirations.
            </div>

            <div className="mt-20 text-center">
              <p className="text-2xl">
                Avec nous, chaque projet est une opportunité de conjuguer
                sécurité, performance et innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Solutions;
