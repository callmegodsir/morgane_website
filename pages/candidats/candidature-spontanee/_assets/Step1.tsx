import React from "react";

type Step1Props = {
  formData: any;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Step1: React.FC<Step1Props> = ({
  formData: CandidateData,
  handleInput,
}) => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="playfair text-4xl font-bold w-full text-left mb-12">
        Candidatez dès maintenant ! <br />
      </h1>

      <div></div>
      <form className="flex flex-col gap-4 mb-6">
        <label htmlFor="name">Nom</label>
        <input
          onChange={handleInput}
          value={CandidateData?.name || ""}
          type="text"
          name="name"
          id="name"
          className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-700 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
        />
        <label htmlFor="firstName">Prénom</label>
        <input
          onChange={handleInput}
          value={CandidateData?.firstName || ""}
          type="text"
          name="firstName"
          id="firstName"
          className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-700 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={handleInput}
          value={CandidateData?.email || ""}
          type="text"
          name="email"
          id="email"
          className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-700 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
        />
        <label htmlFor="phone">Telephone</label>
        <input
          onChange={handleInput}
          value={CandidateData?.phone || ""}
          type="number"
          name="phone"
          id="phone"
          className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-700 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
        />
      </form>
    </div>
  );
};

export default Step1;
