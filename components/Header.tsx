"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import logo from "../public/MPVlogo.webp";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Nos solutions", href: "/nos-solutions" },
  { name: "Nos partenaires", href: "/nos-partenaires" },
  { name: "Actualités", href: "/actualites" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black z-50 h-24 sticky top-0">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 h-full"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-6">
          <Link href="/" className="h-full aspect-square">
            <Image
              src={logo}
              alt="MPV Invest Logo"
              className="h-full w-full object-contain"
              priority
            />
          </Link>
          <div className="flex flex-col text-white">
            <div className="text-lg sm:text-2xl ">
              MPV INVEST  <br />Ingénierie Patrimoniale
            </div>
            <div className="text-sm hidden md:block">
              Construisons ensemble un patrimoine durable.
            </div>
          </div>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm">
          <div className="flex justify-end">
            <button
              type="button"
              className="text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-base font-semibold text-white hover:text-gray-300 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;
