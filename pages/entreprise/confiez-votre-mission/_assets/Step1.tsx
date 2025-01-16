import React from "react";

type Step1Props = {
  formData: any;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Step1: React.FC<Step1Props> = ({ formData, handleInput }) => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="playfair text-4xl font-bold w-full text-left mb-12">
        Confiez-nous votre mission <br /> 06 77 77 14 01
        📞
      </h1>

      <div></div>
      <form className="flex flex-col gap-4 mb-6">
        <label htmlFor="name">Nom</label>
        <input
          onChange={handleInput}
          value={formData?.name || ""}
          type="text"
          name="name"
          id="name"
          className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-700 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
        />
        <label htmlFor="firstName">Prénom</label>
        <input
          onChange={handleInput}
          value={formData?.firstName || ""}
          type="text"
          name="firstName"
          id="firstName"
          className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-700 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
        />

        <label htmlFor="yourPost">Votre fonction</label>
        <input
          onChange={handleInput}
          value={formData?.yourPost || ""}
          type="text"
          name="yourPost"
          id="yourPost"
          className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-700 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
        />
        <label htmlFor="company">Nom de l&apos;entreprise</label>
        <input
          onChange={handleInput}
          value={formData?.company || ""}
          type="text"
          name="company"
          id="company"
          className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-700 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
        />
      </form>
    </div>
  );
};

export default Step1;
