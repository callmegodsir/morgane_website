// pages/api/callback.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: 'Code de validation manquant.' });
  }

  try {
    // Charger les informations d'identification du client OAuth2 depuis le fichier credentials.json
    const credentials = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'credentials.json'), 'utf8'));
    const { client_secret, client_id, redirect_uris } = credentials.web;

    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    // Échanger le code d'autorisation contre un token d'accès
    const { tokens } = await oAuth2Client.getToken(code as string);
    oAuth2Client.setCredentials(tokens);

    // Enregistrer le token dans un fichier
    fs.writeFileSync(path.join(process.cwd(), 'token.json'), JSON.stringify(tokens));

    res.status(200).json({ message: 'Authentification réussie, token enregistré.' });
  } catch (error) {
    console.error('Erreur lors de l\'authentification :', error);
    res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
}
