import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import homepage from "../public/IMG_6713-2.webp";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Section Hero */}
      <div className="relative h-[400px]">
        <Image
          src={homepage}
          alt="Bannière MPV Invest"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-2xl mb-4">
              Construisons ensemble un patrimoine durable. Votre avenir
              financier, notre priorité.
            </h1>
            <p className="text-xl">
              Chez MPV INVEST, nous mettons à votre service une expertise
              reconnue dans la gestion de patrimoine pour optimiser vos
              investissements et assurer un avenir financier serein.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center space-y-4 px-4">
        <p className="text-2xl">
          Avec nous, chaque projet est une opportunité de conjuguer sécurité,
          performance et innovation.
        </p>
      </div>

      {/* Ce qui nous distingue */}
      <div className="py-8 px-2 bg-white md:py-12 md:px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 md:mb-10">
            Ce qui nous distingue
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div className="p-3 md:p-4">
              <h3 className="text-xl mb-2">
                Une double expertise en droit et finance
              </h3>
            </div>
            <div className="p-3 md:p-4">
              <h3 className="text-xl mb-2">
                Une spécialisation en solutions patrimoniales sur mesure
              </h3>
            </div>
            <div className="p-3 md:p-4">
              <h3 className="text-xl ">
                Une approche personnalisée pour les investisseurs français et
                internationaux
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Nos engagements */}
      <div className=" px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl text-center font-bold mb-8">
            Nos engagements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-xl mb-2">Accompagnement sur-mesure</h3>
              <p className="text-gray-600">
                Parce que chaque client est unique, nous adaptons nos stratégies
                à vos besoins spécifiques
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-xl mb-2">Performance et sérénité</h3>
              <p className="text-gray-600">
                Nous privilégions des solutions à la fois performantes et
                adaptées à vos objectifs à long terme
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-xl mb-2">Innovation et anticipation</h3>
              <p className="text-gray-600">
                Nos conseils intègrent les dernières opportunités en matière
                d&apos;investissement
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
