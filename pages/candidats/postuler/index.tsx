import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Job } from "@/types/main";
import { ParsedUrlQuery } from "querystring";
import {
  MapPinIcon,
  ClockIcon,
  BanknotesIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";

const convertQueryToJob = (query: ParsedUrlQuery): Job | null => {
  const {
    _id,
    title,
    company,
    location,
    salary,
    summary,
    contrat,
    teletravail,
    details,
  } = query;

  if (
    typeof _id === "string" &&
    typeof title === "string" &&
    typeof company === "string" &&
    typeof location === "string" &&
    typeof salary === "string" &&
    typeof summary === "string" &&
    typeof contrat === "string" &&
    typeof teletravail === "string" &&
    typeof details === "string"
  ) {
    return {
      _id,
      title,
      company,
      location,
      salary,
      summary,
      contrat,
      teletravail,
      details,
    };
  }
  return null;
};

const Postuler: React.FC = () => {
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    email: "",
    phone: "",
    cv: null as File | null,
  });
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  useEffect(() => {
    if (router.query) {
      const jobData = convertQueryToJob(router.query);
      setJob(jobData);
    }
  }, [router.query]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "cv" && files) {
      setFormData({ ...formData, cv: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!job) return;

    const offresDataToSend = new FormData();
    offresDataToSend.append("title", job.title);
    offresDataToSend.append("contrat", job.contrat);
    offresDataToSend.append("company", job.company);
    offresDataToSend.append("location", job.location);
    offresDataToSend.append("salary", job.salary);
    offresDataToSend.append("teletravail", job.teletravail);
    offresDataToSend.append("summary", job.summary);
    offresDataToSend.append("details", job.details);
    offresDataToSend.append("name", formData.name);
    offresDataToSend.append("firstName", formData.firstName);
    offresDataToSend.append("email", formData.email);
    offresDataToSend.append("phone", formData.phone);
    if (formData.cv) {
      offresDataToSend.append("cv", formData.cv);
    }

    // Debugging: Log the FormData contents
    for (const [key, value] of Array.from(offresDataToSend.entries())) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await fetch("/api/submitOffresData", {
        method: "POST",
        body: offresDataToSend,
      });

      if (response.ok) {
        setSubmissionSuccess(true);
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const formatDetails = (details: string) => {
    return details.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <section className="relative overflow-hidden bg-white text-black px-8 py-16 xl:px-32 flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col items-center">
          <div className="w-full flex flex-col xl:mr-6">
            <h1 className="playfair text-4xl font-bold w-full text-left mb-12">
              {job.title}
            </h1>
            <div className="border p-4 rounded-md shadow-md mb-8">
              <h2 className="text-xl font-bold">{job.title}</h2>
              <div className="text-gray-600 flex items-center">
                <ClockIcon className="w-5 h-5 mr-2" />
                <span>{job.contrat}</span>
              </div>
              <div className="text-gray-600 flex items-center">
                <BanknotesIcon className="w-5 h-5 mr-2" />
                <span>{job.salary}</span>
              </div>
              <div className="text-gray-600 flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2" />
                <span>{job.location}</span>
              </div>
              <div className="text-gray-600 flex items-center">
                <HomeIcon className="w-5 h-5 mr-2" />
                <span>{job.teletravail}</span>
              </div>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-black text-justify">{job.summary}</p>

              <div className="mt-2 text-black text-justify">
                {formatDetails(job.details)}
              </div>
            </div>
            {submissionSuccess ? (
              <div className="p-4 bg-green-100 text-green-700 rounded-md">
                Votre candidature a été envoyée avec succès !
              </div>
            ) : (
              <form
                className="flex flex-col gap-4 mb-6"
                onSubmit={handleSubmit}
              >
                <label htmlFor="name">Nom</label>
                <input
                  onChange={handleInput}
                  value={formData.name}
                  type="text"
                  name="name"
                  id="name"
                  className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
                />
                <label htmlFor="firstName">Prénom</label>
                <input
                  onChange={handleInput}
                  value={formData.firstName}
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
                />
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleInput}
                  value={formData.email}
                  type="text"
                  name="email"
                  id="email"
                  className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
                />
                <label htmlFor="phone">Telephone</label>
                <input
                  onChange={handleInput}
                  value={formData.phone}
                  type="number"
                  name="phone"
                  id="phone"
                  className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w/full mb-2"
                />
                <label htmlFor="cv">Partagez nous votre CV</label>
                <input
                  name="cv"
                  onChange={handleInput}
                  type="file"
                  accept=".pdf,.doc,.docx"
                />
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                >
                  Postuler
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Postuler;
