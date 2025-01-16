import React from "react";

type SubmittedProps = {
  formData: any;
};

const Submitted: React.FC<SubmittedProps> = ({ formData }) => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="playfair text-4xl font-bold w-full text-left mb-6">
        Merci &nbsp;
        {formData?.firstName || ""}
      </h1>
      <p className="text-md text-black/75">
        Nous reviendrons vers vous dès que possible
      </p>
    </div>
  );
};

export default Submitted;
