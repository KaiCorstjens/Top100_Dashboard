import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../../app/store";
import { SpotifyPlayingResponse } from "../types";

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
    getNowPlaying: builder.query<SpotifyPlayingResponse, string | undefined>({
      query: (token: string) => ({
        url: "/v1/me/player/currently-playing",
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }),
    }),
  }),
});

export const { useGetNowPlayingQuery } = spotifyApi;