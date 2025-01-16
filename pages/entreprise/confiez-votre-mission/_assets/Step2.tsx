import React from "react";

type Step2Props = {
  formData: any;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Step2: React.FC<Step2Props> = ({ formData, handleInput }) => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="playfair text-4xl font-bold w-full text-left mb-12">
      Confiez-nous votre mission <br /> 06 77 77 14 01 📞
      </h1>

      <form className="flex flex-col gap-4 mb-6">
        <label htmlFor="email">Email</label>
        <input
          onChange={handleInput}
          value={formData?.email || ""}
          type="text"
          name="email"
          id="email"
          className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-700 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
        />
        <label htmlFor="phone">Téléphone</label>
        <input
          onChange={handleInput}
          value={formData?.phone || ""}
          type="number"
          name="phone"
          id="phone"
          className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-700 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
        />
        <label htmlFor="jobTitle">Intitulé du poste</label>
        <input
          onChange={handleInput}
          value={formData?.jobTitle || ""}
          type="text"
          name="jobTitle"
          id="jobTitle"
          className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-700 text-lg py-2 transition-all ease-in-out durée-300 w-full mb-2"
        />
        <label htmlFor="descriptionJob">Description du poste</label>
        <input
          onChange={handleInput}
          value={formData?.descriptionJob || ""}
          type="text"
          name="descriptionJob"
          id="descriptionJob"
          className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-700 text-lg py-2 transition-all ease-in-out durée-300 w-full mb-2"
        />
        <label htmlFor="document">
          Si vous avez un document de description de poste n&apos;hésitez pas !
        </label>
        <input
          name="document"
          onChange={handleInput}
          type="file"
          accept=".pdf,.doc,.docx"
        />
      </form>
    </div>
  );
};

export default Step2;
