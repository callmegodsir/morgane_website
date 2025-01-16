"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert('Message sent successfully!');
      } else {
        // Si l'API renvoie un succès false, affichez le message d'erreur spécifique
        alert(`Failed to send message: ${data.message}`);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      // Affichez également des détails sur l'erreur si la requête échoue avant même d'atteindre votre API
      alert('Failed to send message. Check console for more details.');
    }
  };
  return (
    <form className="text-2xl font-bold mb-5 text-white" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          placeholder="You name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your message"
          name="message" // Ceci doit correspondre à votre état et au traitement côté serveur
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button type="submit" className="px-6 mb-5 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
