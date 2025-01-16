import React from "react";
import Header from "@/components/Header"; // Assurez-vous que le chemin est correct
import Footer from "@/components/Footer"; // Assurez-vous que le chemin est correct

const MentionsLegales = () => {
  return (
    <div>
      <Header />
      <div className="relative z-10 mx-auto flex flex-col gap-5 max-w-7xl p-6">
        <h1 className="text-4xl font-semibold text-center text-[#013B94] mt-10">
          Mentions Légales
        </h1>
        <div className="bg-[#013B94] text-white rounded-lg p-6 my-6">
          <p>
            Le site www.recrutement-success.fr (ci-après &apos;le site&apos;)
            est la propriété exclusive de la société Recrutement-Success, SASU
            immatriculée au RCS de Bobigny.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white text-black border border-gray-300">
            <tbody>
              <tr>
                <td className="border px-4 py-2">Société</td>
                <td className="border px-4 py-2">Recrutement-Success</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Siège social</td>
                <td className="border px-4 py-2">
                  1 rue Newton, B21, 93110 Rosny-sous-Bois
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Inscription au registre du commerce et des sociétés
                </td>
                <td className="border px-4 py-2">951 812 759 R.C.S. Bobigny</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">TVA</td>
                <td className="border px-4 py-2">TVA FR13951812759</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Contact</td>
                <td className="border px-4 py-2">
                contact.recrutement.success@gmail.com
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-6 text-justify">
          <p className="text-lg text-black leading-relaxed">
            L&apos;utilisateur du site internet www.recrutement-success.fr
            reconnaît disposer de la compétence et des moyens nécessaires pour
            accéder et utiliser ce site internet. Les utilisateurs sur site web
            sont tenus de respecter les dispositions de la loi relative à
            l&apos;informatique, aux fichiers et aux libertés, dont la violation
            est passible de sanctions pénales. Ils doivent notamment
            s&apos;abstenir, s&apos;agissant d&apos;informations nominatives
            auxquelles ils accèdent, de toute collecte, de toute utilisation
            détournée et de manière générale, de tout acte susceptible de porter
            atteinte à la vie privée ou à la réputation des personnes.
          </p>
          <p className="text-lg text-black leading-relaxed">
            La structure générale, ainsi que les logiciels, textes, images
            animées ou fixes, sons, savoir-faire, dessins, graphismes, bases de
            données dont la société Recrutement-Success est productrice et tout
            autre élément composant le site sont la propriété exclusive de la
            société Recrutement-Success et sont protégés par les dispositions du
            Code de la propriété intellectuelle, notamment par celles de ses
            dispositions relatives à la propriété littéraire et artistique, aux
            droits d&apos;auteur et par les dispositions de la loi du 1er
            juillet 1998 relative à la protection des bases de données. Le Code
            de la propriété intellectuelle n&apos;autorise aux termes de
            l&apos;article L.122-5, d&apos;une part, que les copies ou
            reproductions strictement réservées à l&apos;usage privé du copiste
            et non destinées à une utilisation collective et, d&apos;autre part,
            que les analyses et les courtes citations dans un but d&apos;exemple
            et d&apos;illustration. De même, l&apos;article L.342-3 du Code de
            la propriété intellectuelle n&apos;autorise que l&apos;extraction ou
            la réutilisation d&apos;une partie non substantielle du contenu
            d&apos;une base de données mise à la disposition du public par son
            titulaire. Par conséquent, toute représentation ou reproduction non
            autorisée de tout ou partie du site, par quelque moyen que ce soit,
            est strictement interdite sous peine de poursuites judiciaires.
            Toute contravention expose l&apos;auteur à des sanctions civiles et
            pénales et notamment aux peines prévues aux articles L335-2 et
            L343-1 du Code de la propriété intellectuelle. Toute utilisation
            quelle qu&apos;elle soit des noms de marques et logos figurant sur
            le site incluant notamment, mais non limitativement,
            Recrutement-Success, ainsi que les noms commerciaux détenus par les
            partenaires de Recrutement-Success est interdite sans
            l&apos;autorisation expresse et préalable des titulaires des droits.
          </p>
          <p className="text-lg text-black leading-relaxed">
            La société Recrutement-Success fera de son mieux pour rendre le site
            accessible, mais ne saurait en aucun cas engager sa responsabilité
            en cas de non atteinte de cet objectif. De même, la société
            Recrutement-Success ne saurait être tenue responsable des erreurs ou
            de l&apos;indisponibilité des informations et/ou des services. Les
            utilisateurs sont informés que lors de leurs visites sur le site, un
            cookie peut s&apos;installer automatiquement sur leur logiciel de
            navigation. Un cookie est un bloc de données qui ne permet pas
            d&apos;identifier les utilisateurs mais sert à enregistrer des
            informations relatives à la navigation de celui-ci sur le site. Le
            paramétrage du logiciel de navigation permet d&apos;informer de la
            présence de cookies et éventuellement, de la refuser.
          </p>
          <p className="text-lg text-black leading-relaxed">
            Les liens hypertextes figurant sur le site en direction
            d&apos;autres sites Internet, et notamment vers les partenaires de
            la sociétés Recrutement-Success ont fait l&apos;objet d&apos;une
            autorisation préalable et expresse. Toutefois, Recrutement-Success
            n&apos;est pas responsable des informations accessibles via lesdits
            liens.
          </p>
          <p className="text-lg text-black leading-relaxed">
            Pour toute question, commentaire ou information complémentaire sur
            la société Recrutement-Success en adressant un e-mail à
            l&apos;adresse suivante : contact.recrutement.success@gmail.com.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
