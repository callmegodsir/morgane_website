import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsParallax from "@/components/TestimonialsParallax";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header />
      <div>
        <TestimonialsParallax />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
