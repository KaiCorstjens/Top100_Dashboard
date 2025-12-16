import { SPOTIFY_CLIENT_ID } from "../../../../app/constants";

import { getRedirectUri } from "./authorizationHelper";

export const getToken = async (code: string) => {
  // stored in the previous step
  const codeVerifier = localStorage.getItem("code_verifier") ?? "NOT_FOUND";
  const redirectUri = getRedirectUri();
  const clientId = SPOTIFY_CLIENT_ID;
  const url = "https://accounts.spotify.com/api/token";

  const params: Record<string, string> = {
    client_id: clientId,
    grant_type: "authorization_code",
    code: code,
    redirect_uri: redirectUri,
    code_verifier: codeVerifier,
  };

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(params),
  };

  const body = await fetch(url, payload);
  const response = await body.json();

  localStorage.setItem("refresh_token", response.refresh_token);
  return response;
};

export const getTokenFromRefresh = async (refreshToken: string) => {
  // refresh token that has been previously stored
  const url = "https://accounts.spotify.com/api/token";
  const clientId = SPOTIFY_CLIENT_ID;

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: clientId,
    }),
  };
  const body = await fetch(url, payload);
  const response = await body.json();

  if (response.refresh_token) {
    localStorage.setItem("refresh_token", response.refresh_token);
  }
  return response.access_token;
};
