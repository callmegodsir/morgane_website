import Link from "next/link";
import config from "@/config";
import { SocialIcon } from "react-social-icons";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Section logo et description */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <div className="text-xl font-bold">
                MPV INVEST - Ingénierie Patrimoniale
              </div>
              <div className="text-sm mt-2">
                Construisons ensemble un patrimoine durable.
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-300">
              Copyright © {new Date().getFullYear()} - Tous droits réservés
            </p>
          </div>

          {/* Section liens */}
          <div className="w-full md:w-1/4">
            <div className="font-semibold text-lg mb-4">Navigation</div>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-gray-300 hover:text-white">
                Accueil
              </Link>
              <Link href="/" className="text-sm text-gray-300 hover:text-white">
                Nos solutions
              </Link>
              <Link href="/" className="text-sm text-gray-300 hover:text-white">
                Nos partenaires
              </Link>
              <Link href="/" className="text-sm text-gray-300 hover:text-white">
                Actualités
              </Link>
            </div>
          </div>

          {/* Section légal */}
          <div className="w-full md:w-1/4">
            <div className="font-semibold text-lg mb-4">
              Informations légales
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/mentions_legales"
                className="text-sm text-gray-300 hover:text-white"
              >
                Mentions Légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
