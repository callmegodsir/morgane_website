"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";
import { Job } from "@/types/main";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  MapPinIcon,
  ClockIcon,
  BanknotesIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  const router = useRouter();

  const handleApply = () => {
    router.push({
      pathname: "/candidats/postuler",
      query: { ...job, _id: job._id.toString() }, // Conversion _id en chaîne de caractères
    });
  };

  return (
    <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full">
      <div>
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
      </div>


      <button
        onClick={handleApply}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        Voir l&apos;offre
      </button> 
    </div>
  );
};

const JobsPage: React.FC = () => {
  const [jobOffers, setJobOffers] = useState<Job[]>([]);



  

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/api/getJobOffers");
        setJobOffers(response.data);
      } catch (error) {
        console.error("Error fetching job offers:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <Header />
      <section className="relative overflow-hidden bg-white text-black px-8 py-16 xl:px-32 flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOffers.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default JobsPage;
