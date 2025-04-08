import { useState, ChangeEvent, FormEvent } from "react";

interface ImageData {
  title: string;
  description: string;
  image: File | null;
}

interface ImageUploaderProps {
  onImageUploaded?: (image: any) => void;
}

export default function ImageUploader({ onImageUploaded }: ImageUploaderProps) {
  const [imageData, setImageData] = useState<ImageData>({
    title: "",
    description: "",
    image: null,
  });
  const [preview, setPreview] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setImageData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageData((prev) => ({ ...prev, image: file }));

      // Créer un aperçu de l'image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!imageData.image) {
      setError("Veuillez sélectionner une image");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    const formData = new FormData();
    formData.append("title", imageData.title);
    formData.append("description", imageData.description);
    formData.append("image", imageData.image);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess("Image téléchargée avec succès!");
        setImageData({ title: "", description: "", image: null });
        setPreview("");

        if (onImageUploaded && result.image) {
          onImageUploaded(result.image);
        }
      } else {
        setError(result.message || "Erreur lors du téléchargement");
      }
    } catch (error) {
      setError("Erreur lors de la communication avec le serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded p-6">
      {error && (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
          role="alert"
        >
          <p>{error}</p>
        </div>
      )}

      {success && (
        <div
          className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4"
          role="alert"
        >
          <p>{success}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Titre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name="title"
            value={imageData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            value={imageData.description}
            onChange={handleChange}
            rows={3}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            name="image"
            onChange={handleFileChange}
            accept="image/*, application/pdf"
            required
          />
        </div>

        {preview && (
          <div className="mb-4">
            <p className="text-sm font-bold mb-2">Aperçu :</p>
            <img
              src={preview}
              alt="Aperçu"
              className="max-w-full h-auto max-h-48"
            />
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={loading}
          >
            {loading ? "Chargement..." : "Télécharger l'image"}
          </button>
        </div>
      </form>
    </div>
  );
}
