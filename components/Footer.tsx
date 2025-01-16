import Link from "next/link";
import config from "@/config";
import { SocialIcon } from "react-social-icons";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 ">
      <div className="max-w-7xl mx-auto px-8 py-24 border-t border-base-content/10">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href="/#" aria-current="page" className="">
              <h1 className="text-2xl playfair text-[#013B94]">
                <strong className="playfair-extrabold">Recrutement -</strong>
                Success
              </h1>
            </Link>

            <p className="mt-3 text-sm text-gray-900 text-opacity-75">
              {config.appDescription}
            </p>
            <p className="mt-3 text-sm text-gray-900 text-opacity-75">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-center  md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-gray-900 tracking-widest text-sm md:text-left mb-3">
                LEGAL
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/mentions_legales" className="link">
                  Mentions Légales
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:flex-col gap-2">
            <SocialIcon
              url="https://www.facebook.com/profile.php?id=61564354225198"
              target="_blank"
              bgColor="grey"
              className="hover:bg-[#013B94] transition-all ease-in-out duration-300"
            />
            <SocialIcon
              url="https://www.instagram.com/recrutement.success?igsh=MW9uOTF3emF3cGt1NA%3D%3D&utm_source=qr"
              target="_blank"
              bgColor="grey"
              className="hover:bg-[#013B94] transition-all ease-in-out duration-300"
            />
            <SocialIcon
              url="https://www.linkedin.com/company/recrutementsuccess/about/?viewAsMember=true"
              target="_blank"
              bgColor="grey"
              className="hover:bg-[#013B94] transition-all ease-in-out duration-300"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
