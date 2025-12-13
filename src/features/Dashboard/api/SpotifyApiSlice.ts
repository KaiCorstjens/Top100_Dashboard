import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../../app/store";
import { SpotifyPlayingResponse, SpotifyTokenResponse } from "../types";
import { SPOTIFY } from "../../../app/constants";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).dashboard.token;
      headers.set("Authorization", "Bearer " + token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNowPlaying: builder.query<SpotifyPlayingResponse, void>({
      query: () => "/v1/me/player/currently-playing",
    }),
  }),
});

export const spotifyAuthApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://accounts.spotify.com/api/",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Authorization", "Basic " + SPOTIFY);
      headers.set("content-type", "application/x-www-form-urlencoded");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAccessToken: builder.query<SpotifyTokenResponse, { code : string}>({
      query: (params) => ({
        url: "/token",
        params: params,
      }),
    }),
  }),
});

export const { useGetNowPlayingQuery } = spotifyApi;
export const { useGetAccessTokenQuery } = spotifyAuthApi;
