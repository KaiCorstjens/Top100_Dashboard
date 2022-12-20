import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Song, SongStats } from "../types";

interface DashboardState {
  song: Song | undefined;
  token: string | undefined;
  stats: SongStats | undefined;
}

const initialState = { song: undefined } as DashboardState;

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
  },
});

export const { setSong, setToken, setSongStats } = dashboardSlice.actions;
export default dashboardSlice.reducer;
