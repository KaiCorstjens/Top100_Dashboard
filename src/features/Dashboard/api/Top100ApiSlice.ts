import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SongStats } from "../types";

export const top100Api = createApi({
  reducerPath: "top100Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://top100.stichtingpopell.nl/api",
  }),
  endpoints: (builder) => ({
    getSongStats: builder.query<
      SongStats,
      { spotify_uri: string; year: number }
    >({
      query: (params) => ({
        url: "/stats",
        params: params,
      }),
    }),
  }),
});

export const { useLazyGetSongStatsQuery } = top100Api;
