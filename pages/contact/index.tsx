import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Contact</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Morgane POINTET-VITTI
              </h2>
              <p className="text-gray-600 mb-4">
                Membre Anacofi - CIF - ORIAS : 23008521 - CIF : E010620 - Carte
                T : CPI75012022000000045
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                  <ul className="text-gray-600">
                    <li>Ingénieur Patrimonial</li>
                    <li>Droit des affaires</li>
                    <li>Fiscalité du dirigeant</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">MPV INVEST</h3>
                  <p className="flex items-center text-gray-600">
                    <span className="material-icons-outlined mr-2">📍</span>
                    <a
                      href="https://maps.google.com/?q=35+rue+Saint-Didier+75116+Paris"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600"
                    >
                      35 rue Saint-Didier
                      <br />
                      75116 Paris
                    </a>
                  </p>
                </div>

                <div className="space-y-2">
                  <a
                    href="mailto:morgane@mpvinvest.com"
                    className="flex items-center hover:text-blue-600"
                  >
                    <span className="material-icons-outlined mr-2">📧</span>
                    morgane@mpvinvest.com
                  </a>
                  <a
                    href="tel:+33680870726"
                    className="flex items-center hover:text-blue-600"
                  >
                    <span className="material-icons-outlined mr-2">📱</span>
                    06 80 87 07 26
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4">Réseaux sociaux</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/in/mpvinvest"
                  className="bg-blue-100 px-4 py-2 rounded-lg hover:bg-blue-200 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6 fill-current text-blue-600"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </Link>
                <Link
                  href="https://www.instagram.com/morganepointetvitti/profilecard/?igsh=MW5tNWxlM2N0dHlkdQ=="
                  className="bg-pink-100 px-4 py-2 rounded-lg hover:bg-pink-200 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6 fill-current text-pink-600"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
