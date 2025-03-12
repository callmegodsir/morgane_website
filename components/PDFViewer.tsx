import { useState } from 'react';

interface PDFViewerProps {
  file: string;
}

const PDFViewer = ({ file }: PDFViewerProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleLoadError = () => {
    setError("Impossible de charger le PDF");
    setLoading(false);
  };

  const handleLoadSuccess = () => {
    setLoading(false);
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex space-x-2">
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Ouvrir le PDF
        </a>
        <a
          href={file}
          download
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
        >
          Télécharger
        </a>
      </div>
      
      {loading && (
        <div className="flex justify-center items-center h-20">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
          <p className="ml-2">Chargement du PDF...</p>
        </div>
      )}
      
      {error && (
        <div className="text-red-500 p-4">
          <p>{error}</p>
        </div>
      )}
      
      <div className="border rounded" style={{ display: loading ? 'none' : 'block' }}>
        <iframe
          src={`${file}#toolbar=0&navpanes=0`}
          className="w-full h-96"
          onLoad={handleLoadSuccess}
          onError={handleLoadError}
        />
      </div>
    </div>
  );
};

export default PDFViewer;