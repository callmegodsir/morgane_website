import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [isClient, setIsClient] = useState(false);

  // Déplacer useRouter en dehors de la condition
  const router = useRouter();

  // Vérifier si nous sommes côté client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const hash = router?.query?.hash;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      const res = await fetch("/api/files/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setMessage("Fichier uploadé avec succès");
        setTitle("");
        setFile(null);
      } else {
        setMessage("Erreur lors de l'upload du fichier");
      }
    } catch (error) {
      setMessage("Erreur lors de l'upload du fichier");
    }
  };

  // Afficher un état de chargement jusqu'à ce que le client soit prêt
  if (!isClient || !router?.isReady) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl mb-6">Dashboard</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2">
            Titre du fichier
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block mb-2">
            Fichier PDF
          </label>
          <input
            id="file"
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Uploader
        </button>
        {message && <p className="mt-4 text-center">{message}</p>}
      </form>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Dashboard), {
  ssr: false,
});
