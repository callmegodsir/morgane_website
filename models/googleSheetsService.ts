// models/googleSheetsService.ts
import { google } from "googleapis";
import fs from "fs";
import path from "path";

// Charger les informations d'identification du client OAuth2 depuis le fichier credentials.json
const credentials = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "credentials.json"), "utf8")
);
const { client_secret, client_id, redirect_uris } = credentials.web;

// Créer un client OAuth2
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

// Générez le lien d'autorisation
export const getAuthUrl = () => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  console.log("Authorize this app by visiting this url:", authUrl);
};

// Utilisez cette fonction pour obtenir le lien d'autorisation
getAuthUrl();

// Une fois que vous avez le code, échangez-le pour obtenir le token
export const getAccessToken = async (code: string) => {
  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);
  fs.writeFileSync("token.json", JSON.stringify(tokens));
  console.log("Token stored to token.json");
};

// Charger les informations d'identification si déjà autorisées
export const loadSavedCredentialsIfExist = () => {
  try {
    const token = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "token.json"), "utf8")
    );
    oAuth2Client.setCredentials(token);
    return oAuth2Client;
  } catch (err) {
    return null;
  }
};

// Fonction pour ajouter des données au Google Sheet
export const appendToGoogleSheet = async (auth: any, candidateData: any) => {
  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = "1d_JLzgeE3S5swy5f8g7BmOkjr5JGqKy6mi2p2UrxjfI"; // Remplacez par l'ID de votre Google Sheet

  const request = {
    spreadsheetId: spreadsheetId,
    range: "Candidatures!B2", // Remplacez par la plage appropriée
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    resource: {
      values: [
        [
          candidateData.name,
          candidateData.firstName,
          candidateData.email,
          candidateData.phone,
          candidateData.jobTitle,
          candidateData.localisation,
          candidateData.otherInfo,
          candidateData.cv.data.toString("base64"), // Encodage du CV en base64
        ],
      ],
    },
  };

  await sheets.spreadsheets.values.append(request);
};
