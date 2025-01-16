"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  ClipboardDocumentListIcon,
  StarIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon,
  AcademicCapIcon,
  UserIcon,
  CurrencyEuroIcon,
  FolderIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import logo from "../public/logo.png";

const entreprise_choice = [
  {
    name: "Pourquoi un cabinet ?",
    description: "",
    href: "/entreprise/pourquoi-un-cabinet",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Confiez-nous votre mission",
    description: "",
    href: "/entreprise/confiez-votre-mission",
    icon: UserIcon,
  },
  {
    name: "Coût d'un recrutement",
    description: "",
    href: "/entreprise/cout-recrutement",
    icon: CurrencyEuroIcon,
  },
  {
    name: "Process de recrutement",
    description: "",
    href: "/entreprise/process-recrutement",
    icon: ClipboardDocumentListIcon,
  },
];

const nous_connnaitre_choice = [
  {
    name: "Qui sommes-nous ?",
    description: "",
    href: "/nous-connaitre/qui-sommes-nous",
    icon: StarIcon,
  },

  {
    name: "Nos valeurs",
    description: "",
    href: "/nous-connaitre/nos-valeurs",
    icon: DocumentTextIcon,
  },
  {
    name: "Témoignages clients",
    description: "",
    href: "/nous-connaitre/temoignages-clients",
    icon: ChatBubbleLeftIcon,
  },
];

const candidats_choice = [
  {
    name: "Offres d'emploi",
    description: "",
    href: "/candidats/offres-emploi",
    icon: ArrowDownTrayIcon,
  },
  {
    name: "Candidature spontanée ",
    description: "",
    href: "/candidats/candidature-spontanee",
    icon: AcademicCapIcon,
  },
  {
    name: "Les étapes de candidature ",
    description: "",
    href: "/candidats/etapes-candidature",
    icon: FolderIcon,
  },
];

const contacter_choice = [
  {
    name: "Nous contacter",
    description: "",
    href: "mailto:contact.recrutement.success@gmail.com",
    icon: EnvelopeIcon,
  },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#013B94] z-50 ">
      <nav
        className=" z-50 mx-auto flex max-w-7xl items-center justify-between p-10 l g:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="flex items-center space-x-2 sm:text-base md:text-4xl m-6 text-white absolute left-10 top-0">
              <div className="font-bold">Recrutement</div>
              <span>- </span>
              <div>Success</div>
            </div>
            <span className="sr-only"></span>
          </Link>
        </div>

        <div className="flex lg:hidden ">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-6 mt-10">
          <Link legacyBehavior href="/">
            <a className="text-sm font-semibold leading-6 text-white">
              Accueil
            </a>
          </Link>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Entreprises
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full absolute z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {entreprise_choice.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <item.icon
                          className="h-6 w-6 text-[#013B94] group-hover:text-blue-600"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-[#013B94]"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-[#013B94]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative ">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Candidats
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {candidats_choice.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <item.icon
                          className="h-6 w-6 text-[#013B94] group-hover:text-blue-600"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-[#013B94]"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-[#013B94]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <div>
            <Link
              href="/candidats/offres-emploi"
              className="text-sm font-semibold leading-6 text-white"
            >
              Offres d&apos;emploi
            </Link>
          </div>

          <Popover className="relative ">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Nous connaître
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {nous_connnaitre_choice.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <item.icon
                          className="h-6 w-6 text-[#013B94] group-hover:text-blue-600"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-[#013B94]"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-[#013B94]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <div>
            <Link
              href="/entreprise/outplacement"
              className="text-sm font-semibold leading-6 text-white"
            >
              Outplacement
            </Link>
          </div>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 ml-8 mt-10">
          {contacter_choice.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="-mx-3 flex items-center rounded-lg px-3 py-1.5 text-sm font-medium leading-6 text-white hover:bg-blue-800"
            >
              <item.icon
                className="mr-3 h-5 w-5 text-white"
                aria-hidden="true"
              />
              {item.name}
            </a>
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

        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#013B94] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Recrutement-success</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Accueil
                </Link>
                <Link
                  href="/entreprise/recrutez-des-maintenant"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Entreprises
                </Link>
                {entreprise_choice.map((item) => (
                  <Link
                    legacyBehavior
                    key={item.name}
                    href={item.href}
                    passHref
                  >
                    <a className="-mx-3 flex items-center rounded-lg px-3 py-1.5 text-xs font-medium leading-6 text-white hover:bg-blue-800">
                      <item.icon
                        className="mr-3 h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                ))}

                <Link
                  href="/candidats/offres-emploi"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Candidats
                </Link>
                {candidats_choice.map((item) => (
                  <Link
                    legacyBehavior
                    key={item.name}
                    href={item.href}
                    passHref
                  >
                    <a className="-mx-3 flex items-center rounded-lg px-3 py-1.5 text-xs font-medium leading-6 text-white hover:bg-blue-800">
                      <item.icon
                        className="mr-3 h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                ))}
                <Link
                  href="/candidats/offres-emploi"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Offres d&apos;emploi
                </Link>
                <Link
                  href="/candidats/offres-emploi"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Nous connaître
                </Link>
                {nous_connnaitre_choice.map((item) => (
                  <Link
                    legacyBehavior
                    key={item.name}
                    href={item.href}
                    passHref
                  >
                    <a className="-mx-3 flex items-center rounded-lg px-3 py-1.5 text-xs font-medium leading-6 text-white hover:bg-blue-800">
                      <item.icon
                        className="mr-3 h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                ))}
                <Link
                  href="/entreprise/outplacement"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Outplacement
                </Link>
              </div>

              <div className="py-6">
                {contacter_choice.map((item) => (
                  <Link
                    legacyBehavior
                    key={item.name}
                    href={item.href}
                    passHref
                  >
                    <a className="-mx-3 flex items-center rounded-lg px-3 py-1.5 text-xs font-medium leading-6 text-white hover:bg-blue-800">
                      <item.icon
                        className="mr-3 h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;
