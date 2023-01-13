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
import {
  callSpotifyAuthorize,
  getAccessTokenFromUrl,
  isDifferentSong,
  SpotifyDataToSong,
} from "./helpers";
import { Song } from "./types";

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const [consecutiveSpotifyErrors, setConsecutiveSpotifyErrors] =
    useState<number>(0);

  const { profile, pollingInterval, showSlido, showSponsors, song } =
    useSelector((state: RootState) => state.dashboard);

  const access_token = getAccessTokenFromUrl(window.location.href);

  const [
    getSongStats,
    {
      data: songStatsData,
      isFetching: isFetchingSongStats,
      isError: songStatsError,
    },
  ] = useLazyGetSongStatsQuery();

  // TODO: Spotify playing gets blocked by adblocker?
  const { data, error: spotifyApiError } = spotifyApi.useGetNowPlayingQuery(
    undefined,
    {
      pollingInterval: pollingInterval,
    }
  );

  useEffect(() => {
    if (access_token) {
      dispatch(setToken(access_token));
    } else {
      callSpotifyAuthorize();
    }
  }, [access_token, dispatch, pollingInterval]);

  useEffect(() => {
    if (spotifyApiError) {
      if (
        (access_token &&
          data !== undefined &&
          (spotifyApiError as FetchBaseQueryError).status === 401) ||
        consecutiveSpotifyErrors > 10
      ) {
        callSpotifyAuthorize();
        setConsecutiveSpotifyErrors(0);
      } else {
        console.warn("spotify error", spotifyApiError);
        //setConsecutiveSpotifyErrors(consecutiveSpotifyErrors + 1);
      }
    }
  }, [spotifyApiError, data, access_token]);

  useEffect(() => {
    if (data) {
      const newSong: Song = SpotifyDataToSong(data);
      if (isDifferentSong(newSong, song)) {
        getSongStats({
          title: newSong.title,
          artist: newSong.artist,
          year: 2022,
        });
      }
      dispatch(setSong(newSong));
    }
  }, [data, getSongStats, dispatch]); // DON'T add song as a dependency!

  useEffect(() => {
    if (!isFetchingSongStats) {
      if (songStatsError) {
        dispatch(setSongStats(undefined));
      } else {
        dispatch(setSongStats(songStatsData));
      }
    }
  }, [songStatsData, isFetchingSongStats, songStatsError]);

  useEffect(() => {
    if (profile === undefined) {
      dispatch(setProfile(getDefaultProfile()));
    }
  }, [profile]);

  const slido = () => {
    return showSlido ? <Slido /> : <></>;
  };

  const sponsors = () => {
    return showSponsors ? <Sponsors /> : <></>;
  };

  return (
    <ThemeProvider theme={profile?.theme ?? defaultTheme}>
      <FullScreenDashboard>
        <Controls />
        <SongInfo />
        {slido()}
        {sponsors()}
      </FullScreenDashboard>
    </ThemeProvider>
  );
};
