"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import Step1 from "./_assets/Step1";
import Step2 from "./_assets/Step2";
import Submitted from "./_assets/Submitted";
import work_people from "@/public/photo_registration.jpg";

export default function WebDesign() {
  const [page, setPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    company: "",
    yourPost: "",
    email: "",
    phone: "",
    jobTitle: "",
    descriptionJob: "",
    document: null as File | null,
  });

  function handleInput(e: any) {
    const { name, value, files } = e.target;
    if (name === "document" && files) {
      setFormData({ ...formData, document: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  async function handleSubmit() {
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        formDataToSend.append(key, value as any);
      }
    });

    try {
      const response = await fetch("/api/submitRecruiterForm", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        nextPage();
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Erreur d'envoi du formulaire");
    }
  }

  function checkInput() {
    if (page === 1) {
      if (formData.name === "") {
        setErrorMessage("Veuillez entrer votre nom");
      } else if (formData.firstName === "") {
        setErrorMessage("Veuillez entrer votre prénom");
      } else if (formData.company === "") {
        setErrorMessage("Veuillez entrer le nom de l'entreprise");
      } else if (formData.yourPost === "") {
        setErrorMessage("Veuillez entrer votre poste");
      } else {
        setErrorMessage("");
        nextPage();
      }
    } else if (page === 2) {
      if (formData.email === "") {
        setErrorMessage("Veuillez entrer votre email");
      } else if (formData.phone === "") {
        setErrorMessage("Veuillez entrer votre téléphone");
      } else if (formData.jobTitle === "") {
        setErrorMessage("Veuillez entrer le nom du poste");
      } else if (formData.descriptionJob === "") {
        setErrorMessage("Veuillez entrer une description du poste");
      } else {
        setErrorMessage("");
        handleSubmit();
      }
    } else {
      console.log("submitted");
      nextPage();
    }
  }

  function nextPage() {
    setPage(page + 1);
  }

  return (
    <>
      <Header />
      <section className="relative overflow-hidden bg-white text-black px-8 py-16 xl:px-32 flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col xl:flex-row items-start justify-between">
          <div className="w-full xl:w-1/2 flex flex-col xl:mr-6">
            {page === 1 ? (
              <Step1 formData={formData} handleInput={handleInput} />
            ) : page === 2 ? (
              <Step2 formData={formData} handleInput={handleInput} />
            ) : (
              <Submitted formData={formData} />
            )}
            {page !== 3 && (
              <button
                onClick={checkInput}
                className="btn btn-wide bg-white border-2 border-gray-900 hover:bg-[#013B94] hover:border-[#013B94] hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-sm"
              >
                {page !== 2 ? "Suivant" : "Envoyer"}
              </button>
            )}
            {errorMessage !== "" && (
              <div
                role="alert"
                className="alert alert-error z-10 w-fit rounded-sm mt-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}
          </div>
          <div className="w-full xl:w-1/2 hidden xl:block">
            <Image
              src={work_people}
              alt="Service Image"
              width={600}
              height={600}
              className="object-fill"
            />
          </div>
        </div>
        <div className="mt-10">
          Ou contactez-nous à contact.recrutement.success@gmail.com
        </div>
      </section>
      <Footer />
    </>
  );
}
