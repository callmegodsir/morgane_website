import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import fs from 'fs';
import path from 'path';

interface PDFDocument {
  id: string;
  filename: string;
  title: string;
  path: string;
  uploadDate: string;
  length: number;
}

// Cette fonction s'exécute au moment de la construction (build) du site
// ou à chaque requête en mode développement
export async function getStaticProps() {
  try {
    const dbPath = path.join(process.cwd(), 'public', 'pdfs', 'database.json');
    let pdfDocuments: PDFDocument[] = [];
    
    if (fs.existsSync(dbPath)) {
      const dbContent = fs.readFileSync(dbPath, 'utf8');
      pdfDocuments = JSON.parse(dbContent);
    }
    
    return {
      props: {
        pdfDocuments
      },
      // Régénérer la page toutes les heures (optionnel)
      revalidate: 3600
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des documents:", error);
    return {
      props: {
        pdfDocuments: [] as PDFDocument[]
      }
    };
  }
}

export default function Actualites({ pdfDocuments }: { pdfDocuments: PDFDocument[] }) {
  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <Header/>
      <Head>
        <title>Actualités</title>
      </Head>
      
      <h1 className="text-2xl font-bold mb-6">Actualités</h1>

      {pdfDocuments.length === 0 ? (
        <p className="text-gray-500">
          Aucun document disponible pour le moment.
        </p>
      ) : (
        <div className="w-full max-w-4xl space-y-6">
          {pdfDocuments.map((doc) => (
            <div
              key={doc.id}
              className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-4">
                {doc.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Ajouté le {new Date(doc.uploadDate).toLocaleDateString()}
              </p>
              <div className="border-t pt-4">
                <div className="w-full">
                  <div className="mb-4 flex space-x-2">
                    <a
                      href={doc.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Ouvrir le PDF
                    </a>
                    <a
                      href={doc.path}
                      download
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                    >
                      Télécharger
                    </a>
                  </div>
                  
                  <div className="border rounded">
                    <iframe
                      src={`${doc.path}#toolbar=0&navpanes=0`}
                      className="w-full h-96"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}