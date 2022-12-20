import { configureStore } from "@reduxjs/toolkit";
import DashboardSlice from "../features/Dashboard/api/DashboardSlice";
import { spotifyApi } from "../features/Dashboard/api/SpotifyApiSlice";
import { top100Api } from "../features/Dashboard/api/Top100ApiSlice";

const store = configureStore({
  reducer: {
    dashboard: DashboardSlice,
    [spotifyApi.reducerPath]: spotifyApi.reducer,
    [top100Api.reducerPath]: top100Api.reducer,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat(
      ...[spotifyApi.middleware, top100Api.middleware]
    ),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
