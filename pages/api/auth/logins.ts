import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { username, password } = req.body;

  if (
    username !== process.env.ADMINID ||
    password !== process.env.ADMINPASSWORD
  ) {
    return res.status(401).json({ error: "Identifiants invalides" });
  }

  const hash = crypto.randomBytes(20).toString("hex");
  const expires = new Date(Date.now() + 86400000);

  // Stockage du hash en mémoire (à remplacer par une BD en production)
  if (!process.env.VALID_HASHES) {
    process.env.VALID_HASHES = JSON.stringify([]);
  }
  const validHashes = JSON.parse(process.env.VALID_HASHES);
  validHashes.push(hash);
  process.env.VALID_HASHES = JSON.stringify(validHashes);

  res.setHeader("Set-Cookie", [
    `authenticated=true; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${expires.toUTCString()}`,
    `hash=${hash}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${expires.toUTCString()}`,
  ]);

  res.status(200).json({ success: true });
}
