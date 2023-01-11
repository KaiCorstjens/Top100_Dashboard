import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Song, SongStats } from "../types";

interface DashboardState {
  song: Song | undefined;
  token: string | undefined;
  stats: SongStats | undefined;
  showSlido: boolean;
  showSponsors: boolean;
  pollingInterval: number;
}

const initialState = {
  song: undefined,
  token: undefined,
  stats: undefined,
  showSlido: false,
  showSponsors: true,
  pollingInterval: 200,
} as DashboardState;

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setSong(state, action: PayloadAction<Song>) {
      state.song = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setSongStats(state, action: PayloadAction<SongStats | undefined>) {
      state.stats = action.payload;
    },
    setShowSlido(state, action: PayloadAction<boolean>) {
      state.showSlido = action.payload;
    },
    setShowSponsors(state, action: PayloadAction<boolean>) {
      state.showSponsors = action.payload;
    },
    setPollingInterval(state, action: PayloadAction<number>) {
      state.pollingInterval = action.payload;
    },
  },
});

export const {
  setSong,
  setToken,
  setSongStats,
  setShowSlido,
  setShowSponsors,
  setPollingInterval,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
