import React, { useState } from "react";
import { useDashboard } from "../api/dashboard_bdd/dashboardConstants";

interface DataItem {
  [key: string]: any;
}

const Dashboard: React.FC = () => {
  const {
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
  } = useDashboard();

  // Regrouper les données par titre
  const groupedData = data.reduce(
    (groups: Record<string, DataItem[]>, item: DataItem) => {
      const title = item.title || "Sans titre";
      if (!groups[title]) {
        groups[title] = [];
      }
      groups[title].push(item);
      return groups;
    },
    {} as Record<string, DataItem[]>
  );

  // État pour gérer l'expansion des groupes
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    {}
  );

  const toggleGroup = (title: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const filteredKeys = Object.keys(data[0] || {}).filter(
    (key) => !excludedFields.includes(key)
  );

  if (!isAuthenticated) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-4">
        Bienvenue sur le gestionnaire de Base de données
      </h1>
      <div className="mb-4">
        <label htmlFor="database">Choisir une base de données : </label>
        <select
          id="database"
          value={selectedDatabase}
          onChange={(e) => setSelectedDatabase(e.target.value)}
        >
          <option value="jobOffers">Offres d&apos;emploi</option>
          <option value="recruiterSubmissions">Client potentiel</option>
          <option value="candidateSubmissions">
            Candidatures spontanées
          </option>
          <option value="offresData">
            Candidature à une de nos annonces
          </option>
        </select>
      </div>
      <button
        onClick={handleLogout}
        className="mb-8 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
      >
        Déconnexion
      </button>
      {loading ? (
        <p>Chargement des données...</p>
      ) : (
        <div className="w-full max-w-7xl">
          {Object.keys(groupedData).map((title) => (
            <div key={title} className="mb-6">
              <div
                className="cursor-pointer bg-gray-200 p-4 rounded"
                onClick={() => toggleGroup(title)}
              >
                <h2 className="text-2xl font-bold flex items-center">
                  {expandedGroups[title] ? "▼" : "▶"} {title}
                </h2>
              </div>
              {expandedGroups[title] && (
                <table className="table-auto w-full mt-4">
                  <thead>
                    <tr>
                      {filteredKeys.map((key, i) => (
                        <th key={i} className="px-4 py-2 border">
                          {key}
                        </th>
                      ))}
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupedData[title].map((item: DataItem, index: number) => (
                      <tr key={index}>
                        {filteredKeys.map((key, i) => (
                          <td key={i} className="px-4 py-2 border">
                            {key === "cv" || key === "document" ? (
                              item[key] ? (
                                <span>{`Document (${item[key].contentType})`}</span>
                              ) : (
                                <span>Aucun document</span>
                              )
                            ) : typeof item[key] === "string" &&
                              item[key].length > 100 ? (
                              <>
                                {showMore[index]
                                  ? item[key]
                                  : `${item[key].substring(0, 100)}...`}
                                <button
                                  onClick={() => handleShowMore(index)}
                                  className="ml-2 text-blue-500"
                                >
                                  {showMore[index] ? "Voir moins" : "Voir plus"}
                                </button>
                              </>
                            ) : (
                              <>{item[key] as React.ReactNode}</>
                            )}
                          </td>
                        ))}
                        <td className="px-4 py-2 border">
                          <button
                            onClick={() => startEditing(item)}
                            className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-700 transition"
                          >
                            Modifier
                          </button>
                          <button
                            onClick={() => handleDelete(item._id)}
                            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition"
                          >
                            Supprimer
                          </button>
                          {selectedDatabase === "candidateSubmissions" &&
                            item.cv && (
                              <button
                                onClick={() => downloadCV(item._id)}
                                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition ml-2"
                              >
                                Télécharger CV
                              </button>
                            )}
                          {selectedDatabase === "offresData" && item.cv && (
                            <button
                              onClick={() => downloadOffreDataCV(item._id)}
                              className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition ml-2"
                            >
                              Télécharger CV
                            </button>
                          )}

                          {selectedDatabase === "recruiterSubmissions" &&
                            item.document && (
                              <button
                                onClick={() => downloadRecruiterDocument(item._id)}
                                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition ml-2"
                              >
                                Télécharger Document
                              </button>
                            )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ))}

          {editingItem ? (
            <div className="mb-8 w-full max-w-7xl">
              <h2 className="text-2xl mb-4">Modifier l&apos;élément</h2>
              {filteredKeys.map((key) => (
                <div key={key} className="mb-4">
                  <label
                    htmlFor={key}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {key}
                  </label>
                  <input
                    type="text"
                    id={key}
                    value={newItem[key] || ""}
                    onChange={(e) => handleInputChange(e, key)}
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              ))}
              <div className="flex justify-between">
                <button
                  onClick={() => handleUpdate(editingItem._id, newItem)}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
                >
                  Sauvegarder
                </button>
                <button
                  onClick={cancelEditing}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition"
                >
                  Annuler
                </button>
              </div>
            </div>
          ) : (
            <div className="mb-8 w-full max-w-7xl">
              <h2 className="text-2xl mb-4">Ajouter un nouvel élément</h2>
              {filteredKeys.map((key) => (
                <div key={key} className="mb-4">
                  <label
                    htmlFor={key}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {key}
                  </label>
                  <input
                    type="text"
                    id={key}
                    value={newItem[key] || ""}
                    onChange={(e) => handleInputChange(e, key)}
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              ))}
              <button
                onClick={handleAdd}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
              >
                Ajouter
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
