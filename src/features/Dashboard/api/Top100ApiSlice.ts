import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SongStats } from "../types";

export const top100Api = createApi({
  reducerPath: "top100Api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://top100.stichtingpopell.nl" }),
  endpoints: (builder) => ({
    getSongStats: builder.query<
      SongStats,
      { spotify_uri: string; year: number }
    >({
      query: (params) => ({
        url: "/song_stats",
        params: params,
      }),
    }),
  }),
});

export const { useLazyGetSongStatsQuery } = top100Api;
