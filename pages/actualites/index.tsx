import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import ImageGallery from '@/components/ImageGallery';

export default function Actualites() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/images');
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

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold my-6">Actualités</h1>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p>Chargement des actualités...</p>
          </div>
        ) : (
          <>
            <p className="mb-6">Découvrez nos dernières actualités et événements en images.</p>
            <ImageGallery images={images} />
          </>
        )}
      </div>
    </Layout>
  );
}