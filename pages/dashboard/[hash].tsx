import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import ImageUploader from "@/components/ImageUploader";
import ImageGallery from "@/components/ImageGallery";

interface Image {
  _id: string;
  path: string;
  title: string;
  description?: string;
  createdAt: string;
}

export default function Dashboard() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Charger les images existantes
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/images");
        
        if (response.ok) {
          const data = await response.json();
          setImages(data);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des images:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchImages();
  }, []);

  const handleImageUploaded = (newImage: Image) => {
    setImages((prev) => [newImage, ...prev]);
  };

  const handleImageDeleted = (imageId: string) => {
    setImages((prev) => prev.filter((img) => img._id !== imageId));
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-64">
          <p>Chargement...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Dashboard Admin</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Ajouter une nouvelle image
          </h2>
          <ImageUploader onImageUploaded={handleImageUploaded} />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Galerie d&apos;images</h2>
          {loading ? (
            <p>Chargement des images...</p>
          ) : (
            <ImageGallery
              images={images}
              onImageDeleted={handleImageDeleted}
              isAdmin={true}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}