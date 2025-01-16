import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

// Hooks et constantes
export const useDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedDatabase, setSelectedDatabase] = useState<string>("jobOffers");
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [newItem, setNewItem] = useState<any>({});
  const [showMore, setShowMore] = useState<Record<number, boolean>>({});

  const router = useRouter();
  const excludedFields = ["_id", "createdAt", "updatedAt", "__v"];

  useEffect(() => {
    const authenticated = Cookies.get("authenticated");
    if (!authenticated) {
      router.push("/connexion");
    } else {
      setIsAuthenticated(true);
      fetchData(selectedDatabase);
    }
  }, [router, selectedDatabase]);
  const fetchData = async (db: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `/api/get${db.charAt(0).toUpperCase() + db.slice(1)}`
      );
      setData(response.data);
    } catch (error) {
      console.error(`Error fetching ${db} data:`, error);
      setData([]);
    }
    setLoading(false);
  };

  const handleLogout = () => {
    Cookies.remove("authenticated");
    Cookies.remove("hash");
    router.push("/connexion");
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.post("/api/dashboard_bdd/deleteItem", {
        db: selectedDatabase,
        id,
      });
      fetchData(selectedDatabase);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleUpdate = async (id: string, updatedData: any) => {
    try {
      await axios.post("/api/dashboard_bdd/updateItem", {
        db: selectedDatabase,
        id,
        data: updatedData,
      });
      fetchData(selectedDatabase);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleAdd = async () => {
    try {
      await axios.post("/api/dashboard_bdd/addItem", {
        db: selectedDatabase,
        data: newItem,
      });
      fetchData(selectedDatabase);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const { value } = e.target;
    setNewItem({ ...newItem, [key]: value });
  };

  const handleShowMore = (index: number) => {
    setShowMore((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const startEditing = (item: any) => {
    setEditingItem(item);
    setNewItem(item);
  };

  const cancelEditing = () => {
    setEditingItem(null);
    setNewItem({});
  };

  const downloadCV = async (id: string) => {
    try {
      const response = await axios.get(`/api/getCandidateCV?id=${id}`, {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `cv-${id}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  };

  // Dans votre composant Dashboard

  const downloadOffreDataCV = async (id: string) => {
    try {
      const response = await fetch(`/api/getOffreDataCV?id=${id}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to download CV");
      }

      const blob = await response.blob();

      const contentDisposition = response.headers.get("Content-Disposition");
      let filename = `cv-${id}.pdf`;

      if (contentDisposition) {
        const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
        if (fileNameMatch && fileNameMatch.length > 1) {
          filename = fileNameMatch[1];
        }
      }

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error: any) {
      console.error("Error downloading CV:", error);
      alert(`Erreur lors du téléchargement du CV: ${error.message}`);
    }
  };

  const downloadRecruiterDocument = async (id: string) => {
    try {
      const response = await axios.get(`/api/getRecruiterDocument?id=${id}`, {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `document-${id}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading recruiter document:", error);
    }
  };

  return {
    isAuthenticated,
    selectedDatabase,
    data,
    loading,
    editingItem,
    newItem,
    showMore,
    excludedFields,
    setSelectedDatabase,
    handleLogout,
    handleDelete,
    handleUpdate,
    handleAdd,
    handleInputChange,
    handleShowMore,
    startEditing,
    cancelEditing,
    downloadCV,
    downloadOffreDataCV,
    downloadRecruiterDocument,
  };
};
