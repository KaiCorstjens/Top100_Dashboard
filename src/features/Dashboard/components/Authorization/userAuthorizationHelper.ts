import { SPOTIFY_CLIENT_ID } from "../../../../app/constants";
import { logger } from "../../../utils/logger";
import { getRedirectUri } from "./authorizationHelper";

const generateRandomString = (length: number) => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

const sha256 = async (plain: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest("SHA-256", data);
};

const base64encode = (input: ArrayBuffer) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};

const getCodeChallenge = async (codeVerifier: string) => {
  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);
  logger("Code Challenge: " + codeChallenge);
  return codeChallenge;
};

export const requestUserAuthorization = async () => {
  const clientId = SPOTIFY_CLIENT_ID;
  const redirectUri = getRedirectUri();

  const scope = "user-read-currently-playing";
  const authUrl = new URL("https://accounts.spotify.com/authorize");

  const codeVerifier = generateRandomString(64);
  logger("code verifier: " + codeVerifier);
  const codeChallenge = await getCodeChallenge(codeVerifier);
  const state = "redirected-from-spotify";

  // generated in the previous step
  window.localStorage.setItem("code_verifier", codeVerifier);

  const params: Record<string, string> = {
    response_type: "code",
    client_id: clientId,
    scope: scope,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
    state: state,
  };

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
};
