import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import photo_cout_recrutement from "@/public/photo_entreprise_process_recrutement.jpg";

const Page = () => {
  return (
    <div>
      <Header />
      {/* Section pour l'image de fond */}

      <div className="relative z-10 mx-auto flex flex-col gap-5 max-w-7xl p-6">
        <h1 className="text-4xl font-semibold text-center text-[#013B94] mt-10">
          Outplacement : notre accompagnement sur-mesure pour les sites
          industriels
        </h1>
        <div className="bg-[#013B94] text-white rounded-lg p-6 my-6">
          <p>
            Derrière cet anglicisme, une réalité concrète : l&apos;aide au
            reclassement professionnel, proposée par une entreprise à un salarié
            qu&apos;elle licencie.
          </p>
        </div>
        <p className="text-lg text-black leading-relaxed text-justify">
          Vous menez une restructuration incluant le départ de salariés (PSE,
          RCC, PDV, etc.) et vous souhaitez accompagner vos salariés dans leur
          mobilité professionnelle externe à l&apos;entreprise ?
          Recrutement-Success, cabinet spécialisé en recrutement et
          outplacement, propose un accompagnement sur-mesure pour chaque
          salarié, qu&apos;il soit en poste ou en repositionnement.
        </p>
        <div className="my-6">
          <Image
            src={photo_cout_recrutement}
            alt="Team"
            layout="responsive"
            width={700}
            height={475}
          />
        </div>
        <div className="text-justify">
          <p className="text-lg text-black leading-relaxed">
            L&apos;activité outplacement a été fondée en 2016 par 4 experts en
            outplacement issus du cabinet d&apos;outplacement Sodie. Ces 4
            experts ont rejoint Recrutement-Success en mai 2023 pour proposer un
            outplacement pour les groupes industriels français. Notre équipe est
            guidée par 6 convictions :
          </p>
          <br />
          <ol className="list-decimal list-inside text-lg text-black leading-relaxed">
            <li>
              Cette double expertise complémentaire, associant outplacement et
              recrutement, fait de Recrutement-Success, un cabinet orienté vers
              une recherche active d&apos;une solution d&apos;emploi pour
              chaque salarié. Notre expérience est que bien souvent, chaque
              salarié, confronté à cette épreuve que constitue la
              restructuration, a tout intérêt à se plonger dès que possible dans
              sa recherche d&apos;emploi, sans se fourvoyer dans des ateliers de
              groupe, un assessment délicat, des bilans de compétences / bilan
              professionnel souvent inutile, un inplacement peu probable car la
              mobilité géographique est souvent un mirage, ou encore une
              illusoire création / reprise d’entreprise.
            </li>
            <br />
            <li>
              L&apos;outplacement des salariés dans l&apos;industrie se réalise
              « sur le terrain » et non dans des locaux d&apos;emplois
              tertiaires ou les salariés n&apos;ont pas leurs repères. Pour
              cela, nous privilégions l&apos;affectation d&apos;un espace de
              l&apos;usine, dédié à l&apos;outplacement.
            </li>
            <br />
            <li>
              Il existe une corrélation entre le nombre d&apos;interactions
              conseiller emploi – salarié et le succès d&apos;un outplacement.
              Plus le salarié interagit avec son conseiller, plus sa recherche
              avance. Le facteur essentiel pour réussir sa transition de
              carrière est de ne pas rester seul. L&apos;accompagnement est
              essentiel pour avancer avec rythme, efficacité et positivité : les
              rencontres avec le conseiller emploi doivent être fréquentes et ce
              dernier participe activement à la recherche d&apos;emploi = le
              conseiller peut co-écrire le CV + profil LinkedIn à partir de
              modèles pré-rédigés, inscrire le CV sur des CVthèques, envoyer
              lui-même des candidatures. Le conseiller emploi rédige un plan
              d&apos;action mutuel entre chaque rencontre.
            </li>
            <br />
            <li>
              Chaque salarié doit pouvoir se préparer à des entretiens avec un
              professionnel du recrutement. Les salariés de l&apos;industrie,
              particulièrement lorsqu&apos;ils ont une grande ancienneté, sont
              peu préparés aux codes de l&apos;entretien de recrutement. Nos
              conseillers emplois ont développé une méthode simple pour aider
              chaque salarié à réussir « en live » son entretien de recrutement.
              Un kit de préparation d&apos;entretien est remis à chaque salarié,
              incluant des conseils, les documents à amener (CV, informations
              détaillées sur son salaire, diplômes) et des questions / réponses
              préparées individuellement avec chaque salarié, ceci incluant la
              discussion salariale.
            </li>
            <br />
            <li>
              Nos conseillers emplois sont issus du territoire dans lequel est
              basée votre usine, car la connaissance des entreprises de votre
              territoire est primordiale pour guider chaque salarié dans sa
              recherche d&apos;une solution d&apos;emploi. Si notre cabinet
              n&apos;en dispose pas, nous recrutons une équipe dédiée, issue de
              ce territoire.
            </li>
            <br />
            <li>
              L&apos;ensemble du process et la situation de chacun des salariés
              peut être exposée à tout moment, en français et en anglais.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
