import Image from "next/image";
import { useState } from "react";

// Renommer l'interface pour éviter le conflit avec le composant Image de next/image
interface ImageItem {
  _id: string;
  url?: string;
  path?: string;
  fileId?: string;
  title: string;
  description?: string;
  createdAt: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  onImageDeleted?: (imageId: string) => void;
  isAdmin?: boolean;
}

export default function ImageGallery({
  images,
  onImageDeleted,
  isAdmin = false,
}: ImageGalleryProps) {
  const [deleting, setDeleting] = useState<string | null>(null);

  if (!images || images.length === 0) {
    return <p>Aucune image disponible.</p>;
  }

  const handleDelete = async (imageId: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette image ?")) {
      setDeleting(imageId);

      try {
        const response = await fetch(`/api/images?id=${imageId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          if (onImageDeleted) {
            onImageDeleted(imageId);
          }
        } else {
          alert("Erreur lors de la suppression de l'image");
        }
      } catch (error) {
        console.error("Erreur:", error);
        alert("Erreur lors de la communication avec le serveur");
      } finally {
        setDeleting(null);
      }
    }
  };

  // Fonction pour déterminer la source de l'image
  const getImageSrc = (image: ImageItem) => {
    // Priorité: url > /api/image/_id > path
    if (image.url) return image.url;
    return `/api/image/${image._id}`;
  };

  return (
    <div className="flex flex-col gap-8">
      {images.map((image: ImageItem) => (
        <div
          key={image._id}
          className="bg-white shadow-lg rounded-md overflow-hidden w-full"
        >
          {/* En-tête avec titre */}
          <div className="p-4 bg-gray-50 border-b">
            <h3 className="font-bold text-xl text-center">{image.title}</h3>
          </div>

          {/* Container pour l'image en format A4 */}
          <div className="relative aspect-[1/1.414] w-full">
            <Image
              src={getImageSrc(image)}
              alt={image.title}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>

          {/* Footer avec description et contrôles */}
          <div className="p-4">
            {image.description && (
              <p className="text-gray-700 mb-3">{image.description}</p>
            )}
            <div className="flex justify-end items-center">
              {isAdmin && (
                <button
                  onClick={() => handleDelete(image._id)}
                  disabled={deleting === image._id}
                  className="bg-red-500 hover:bg-red-700 text-white text-sm py-1 px-3 rounded"
                >
                  {deleting === image._id ? "Suppression..." : "Supprimer"}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
