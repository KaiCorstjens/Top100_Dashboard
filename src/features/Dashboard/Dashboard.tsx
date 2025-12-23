import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { getDefaultProfile } from "../../app/profile/profiles";
import { RootState } from "../../app/store";
import { defaultTheme } from "../../app/theme/default-theme-tokens";
import {
  setProfile,
  setSong,
  setSongStats,
  setToken,
} from "./api/DashboardSlice";
import { spotifyApi } from "./api/SpotifyApiSlice";
import { useLazyGetSongStatsQuery } from "./api/Top100ApiSlice";
import { Controls } from "./components/Controls/Controls";
import { Slido } from "./components/Slido/Slido";
import { SongInfo } from "./components/SongInfo/SongInfo";
import { Sponsors } from "./components/Sponsors/Sponsors";
// import { Lyrics } from "./components/Lyrics/Lyrics";
import { FullScreenDashboard } from "./Dashboard.style";
import { isDifferentSong, SpotifyDataToSong } from "./helpers";
import { Song } from "./types";
import { requestUserAuthorization } from "./components/Authorization/userAuthorizationHelper";
import { logger } from "../utils/logger";

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const [consecutiveSpotifyErrors, setConsecutiveSpotifyErrors] =
    useState<number>(0);

  const { profile, pollingInterval, showSlido, showSponsors, song, token } =
    useSelector((state: RootState) => state.dashboard);

  const [getSongStats] = useLazyGetSongStatsQuery();

  // TODO: Spotify playing gets blocked by adblocker?
  const { data, error: spotifyApiError } = spotifyApi.useGetNowPlayingQuery(
    token,
    {
      pollingInterval: pollingInterval,
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    if (spotifyApiError) {
      logger(spotifyApiError);
      if (
        (data !== undefined &&
          (spotifyApiError as FetchBaseQueryError).status === 401) ||
        consecutiveSpotifyErrors > 10
      ) {
        logger("re-request authorization");
        setToken(undefined);
        requestUserAuthorization();
        setConsecutiveSpotifyErrors(0);
      } else if (
        (spotifyApiError as FetchBaseQueryError).status === "FETCH_ERROR"
      ) {
        console.warn(
          "Spotify request possibly blocked on source, please disable ad blockers"
        );
      } else {
        console.warn("spotify error", spotifyApiError);
        setConsecutiveSpotifyErrors((prevState) => prevState + 1);
      }
    }
  }, [spotifyApiError, data, consecutiveSpotifyErrors]);

  // Spotify currently playing
  useEffect(() => {
    if (data) {
      const newSong: Song = SpotifyDataToSong(data);
      if (isDifferentSong(newSong, song)) {
        getSongStats({
          title: newSong.title,
          artist: newSong.artist,
          spotify_uri: newSong.spotify_uri,
          year: new Date().getFullYear(),
          format: "json",
        })
          .unwrap()
          .then((songStats) => {
            // Kut oplossing omdat Jur zijn werk niet fatsoenlijk doet
            if (songStats?.points >= 1 || songStats?.position <= 150) {
              dispatch(setSongStats(songStats));
            } else {
              dispatch(setSongStats(undefined));
            }
          })
          .catch(() => dispatch(setSongStats(undefined)));
      }
      dispatch(setSong(newSong));
    }
  }, [data, getSongStats, dispatch]); // DON'T add song as a dependency!

  useEffect(() => {
    if (profile === undefined) {
      dispatch(setProfile(getDefaultProfile()));
    }
  }, [profile, dispatch]);

  return (
    <ThemeProvider theme={profile?.theme ?? defaultTheme}>
      <FullScreenDashboard>
        <Controls />
        <SongInfo />
        {showSlido && <Slido />}
        {showSponsors && <Sponsors />}
      </FullScreenDashboard>
    </ThemeProvider>
  );
};
