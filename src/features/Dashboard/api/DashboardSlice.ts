import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Song, SongStats } from "../types";
import { Profile } from "../../../app/profile/types";

interface DashboardState {
  profile: Profile | undefined;
  song: Song | undefined;
  token: string | undefined;
  stats: SongStats | undefined;
  showSlido: boolean;
  showSponsors: boolean;
  showStats: boolean;
  pollingInterval: number;
  sponsorInterval: number;
  showPoster: boolean;
  posterInterval: number;
  posterShowTime: number;
}

const initialState = {
  profile: undefined,
  song: undefined,
  token: undefined,
  stats: undefined,
  showSlido: false,
  showSponsors: true,
  showStats: false,
  pollingInterval: 200,
  sponsorInterval: 5000,
  showPoster: true,
  posterInterval: 900000, // 15 minutes
  posterShowTime: 30000, // 30 seconds
} as DashboardState;

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<Profile>) {
      state.profile = action.payload;
      state.showSlido = action.payload.showChat;
      state.showSponsors = action.payload.showSponsors;
      state.pollingInterval = action.payload.interval;
      state.showStats = action.payload.showStats;
      state.showPoster = action.payload.showPoster;
    },
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
    setShowStats(state, action: PayloadAction<boolean>) {
      state.showStats = action.payload;
    },
    setPollingInterval(state, action: PayloadAction<number>) {
      state.pollingInterval = action.payload;
    },
    setSponsorInterval(state, action: PayloadAction<number>) {
      state.sponsorInterval = action.payload;
    },
    setShowPoster(state, action: PayloadAction<boolean>) {
      state.showPoster = action.payload;
    },
    setPosterInterval(state, action: PayloadAction<number>) {
      state.posterInterval = action.payload;
    },
    setPosterShowTime(state, action: PayloadAction<number>) {
      state.posterShowTime = action.payload;
    },
  },
});

export const {
  setProfile,
  setSong,
  setToken,
  setSongStats,
  setShowSlido,
  setShowSponsors,
  setShowStats,
  setPollingInterval,
  setSponsorInterval,
  setShowPoster,
  setPosterInterval,
  setPosterShowTime,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
