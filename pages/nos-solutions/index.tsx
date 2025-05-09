import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import homepage from "@/public/IMG_6358.webp";
const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* En-tête Solutions */}
      <div className="relative h-[400px] md:h-[800px] flex bg-black -mt-16">
        <div className="hidden md:block w-1/4"></div>
        <div className="w-full md:w-1/2 relative">
          <Image
            src={homepage}
            alt="Nos solutions - En-tête"
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-5xl font-bold text-white">Nos solutions</h1>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-1/4"></div>
      </div>

      {/* Contenu Solutions */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="prose-xl flex flex-col text-justify justify-center max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              Dans notre cabinet, nous adoptons une approche unique et
              personnalisée, axée sur les spécificités de chaque client. Chaque
              collaboration débute par un audit approfondi des besoins, des
              ambitions et des enjeux spécifiques de nos partenaires. Ce
              diagnostic initial nous permet de co-construire des solutions sur
              mesure, alignées sur vos objectifs stratégiques, tout en intégrant
              des recommandations visant à anticiper et à lever
              d&apos;éventuelles zones de vigilance. Grâce à votre expertise et
              à notre méthode d&apos;accompagnement, nous visons à maximiser
              votre impact dans des environnements où l&apos;excellence
              opérationnelle et le service client sont essentiels.
            </p>
            <p className="text-lg">
              Nous sommes un cabinet engagé dans l&apos;accompagnement
              stratégique de nos clients, avec une approche globale et sur
              mesure pour répondre à des besoins diversifiés en création de
              valeur, transmission patrimoniale et optimisation des actifs.
              Notre expertise s&apos;appuie sur une gamme étendue de solutions
              adaptées :
            </p>
          </div>

          <div className="prose-lg mt-20">
            <div className="space-y-20">
              {/* Section 1 */}
              <div className="grid md:grid-cols-2 gap-12">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-xl md:text-2xl mb-8 text-justify">
                    Création sociétale, avec une structuration stratégique et
                    personnalisée d&apos;entreprises.
                  </h2>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-xl md:text-2xl mb-8 text-justify">
                    Préparation successorale et accompagnement dans les projets
                    de transmission patrimoniale.
                  </h2>
                </div>
              </div>

              {/* Section 2 */}
              <div className="grid md:grid-cols-2 gap-12">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-xl md:text-2xl mb-8 text-justify">
                    Création de revenus complémentaires, placements financiers
                    transparents et gestion d&apos;actifs avec une clarté totale
                    sur notre rémunération.
                  </h2>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-xl md:text-2xl mb-8 text-justify">
                    Assurantiels, pour protéger efficacement le patrimoine et
                    sécuriser les actifs.
                  </h2>
                </div>
              </div>

              {/* Section 3 */}
              <div className="grid md:grid-cols-2 gap-12">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-xl md:text-2xl mb-8 text-justify">
                    Private equity, permettant une diversification stratégique
                    des investissements.
                  </h2>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-xl md:text-2xl mb-8 text-justify">
                    Optimisation fiscale, notamment via le Girardin industriel,
                    les investissements en bois et forêts, et d&apos;autres
                    dispositifs adaptés.
                  </h2>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-xl md:text-2xl mb-8 text-justify">
                    Innovations financières, avec une expertise ouverte sur les
                    opportunités offertes par les cryptoactifs.
                  </h2>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-xl md:text-2xl mb-8 text-justify">
                    Immobilier spécialisé, incluant les dispositifs Malraux,
                    monuments historiques, démembrement, SCPI et stratégies
                    personnalisées.
                  </h2>
                </div>
              </div>
            </div>
            <div className="mt-10">
              Notre démarche repose sur un audit initial précis, visant à
              comprendre vos ambitions, identifier vos priorités et anticiper
              les éventuelles zones de vigilance. Cette analyse approfondie nous
              permet de bâtir des solutions parfaitement alignées sur vos
              besoins, tout en garantissant une transparence totale et une
              rigueur exemplaire. Avec nous, chaque projet est une opportunité
              de conjuguer sécurité, performance et innovation, pour bâtir un
              avenir durable et aligné sur vos aspirations.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Solutions;
