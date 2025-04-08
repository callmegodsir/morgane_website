import React from "react";
import Header from "@/components/Header"; // Assurez-vous que le chemin est correct
import Footer from "@/components/Footer"; // Assurez-vous que le chemin est correct

const MentionsLegales = () => {
  return (
    <div>
      <Header />
      <div className="relative z-10 mx-auto flex flex-col gap-5 max-w-7xl p-6">
       
      <h1>Mentions légales</h1>

<h2>1. Éditeur du site</h2>
<p><strong>Nom du site</strong> : [Nom de ton site]</p>
<p><strong>Éditeur</strong> : [Ton nom ou raison sociale]</p>
<p><strong>Adresse</strong> : [Adresse postale complète]</p>
<p><strong>Téléphone</strong> : [Numéro de téléphone]</p>
<p><strong>E-mail</strong> : [Adresse email de contact]</p>
<p><strong>Statut juridique</strong> : [Ex : Auto-entrepreneur / SAS / SARL]</p>
<p><strong>Numéro SIRET</strong> : [Numéro SIRET]</p>
<p><strong>Responsable de publication</strong> : [Nom du responsable]</p>

<h2>2. Hébergeur</h2>
<p><strong>Nom de l&apos;hébergeur</strong> : [Nom de l&apos;hébergeur]</p>
<p><strong>Adresse</strong> : [Adresse de l&apos;hébergeur]</p>
<p><strong>Téléphone</strong> : [Téléphone de l&apos;hébergeur]</p>
<p><strong>Site web</strong> : [URL du site de l&apos;hébergeur]</p>

<h2>3. Propriété intellectuelle</h2>
<p>L&apos;ensemble du contenu du site ([Nom du site]) — textes, images, graphismes, logo, icônes, etc. — est protégé par les lois en vigueur sur la propriété intellectuelle.</p>
<p>Toute reproduction ou représentation, totale ou partielle, est interdite sans l&apos;autorisation écrite préalable de l&apos;éditeur.</p>

<h2>4. Données personnelles</h2>
<p>Les informations collectées via les formulaires du site sont destinées exclusivement à [Nom de l&apos;entreprise] et ne seront en aucun cas transmises à des tiers sans consentement.</p>
<p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous pouvez exercer vos droits d&apos;accès, de rectification ou de suppression des données vous concernant à tout moment, en nous contactant à : [Adresse e-mail].</p>

<h2>5. Cookies</h2>
<p>Le site peut utiliser des cookies pour améliorer l&apos;expérience utilisateur. En naviguant sur le site, vous acceptez l&apos;utilisation de cookies.</p>
<p>Vous pouvez configurer votre navigateur pour les refuser ou supprimer les cookies installés.</p>

<h2>6. Contact</h2>
<p>Pour toute question concernant les mentions légales du site, vous pouvez nous contacter à : [Adresse e-mail de contact].</p>

      </div>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
