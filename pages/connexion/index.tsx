import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import crypto from "crypto";
import Link from "next/link";

const Connexion: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const adminId = process.env.NEXT_PUBLIC_ADMINID;
    const adminPassword = process.env.NEXT_PUBLIC_ADMINPASSWORD;
    if (username === adminId && password === adminPassword) {
      const hash = crypto.randomBytes(20).toString("hex");
      Cookies.set("authenticated", "true", { expires: 1 });
      Cookies.set("hash", hash, { expires: 1 });
      router.push(`/dashboard/${hash}`);
    } else {
      setErrorMessage("Identifiant ou mot de passe incorrect");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Link href="/">
        <button className="absolute top-4 left-4 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition">
          Accueil
        </button>
      </Link>
      <h1 className="text-4xl mb-4">Connexion</h1>
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <label htmlFor="username">Identifiant</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-blue-500 border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-blue-500 border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        >
          Connexion
        </button>
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Connexion;