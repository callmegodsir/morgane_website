import React from "react";

type Step2Props = {
  formData: any;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Step2: React.FC<Step2Props> = ({ formData, handleInput }) => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="playfair text-4xl font-bold w-full text-left mb-12">
        Candidatez dès maintenant
      </h1>
      <form className="flex flex-col gap-4 mb-6">
        <label htmlFor="jobTitle">Titre de poste recherché</label>
        <input
          onChange={handleInput}
          value={formData?.jobTitle || ""}
          type="text"
          name="jobTitle"
          id="jobTitle"
          className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-700 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
        />
        <label htmlFor="localisation">Localisation souhaitée</label>
        <input
          onChange={handleInput}
          value={formData?.localisation || ""}
          type="text"
          name="localisation"
          id="localisation"
          className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-700 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
        />
        <label htmlFor="otherInfo">Une dernière chose à nous dire ? </label>
        <input
          onChange={handleInput}
          value={formData?.otherInfo || ""}
          type="text"
          name="otherInfo"
          id="otherInfo"
          className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-[#013B94] border-b-2 border-gray-700 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
        />
        <label htmlFor="cv">Partagez nous votre CV</label>
        <input
          type="file"
          name="cv"
          accept=".pdf"
          onChange={handleInput}
          className="mt-4"
        />
      </form>
    </div>
  );
};

export default Step2;
