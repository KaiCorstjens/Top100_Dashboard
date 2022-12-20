import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setSong, setSongStats, setToken } from "./api/DashboardSlice";
import { spotifyApi } from "./api/SpotifyApiSlice";
import { useLazyGetSongStatsQuery } from "./api/Top100ApiSlice";
import { SongInfo } from "./components/SongInfo/SongInfo";
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
  // get current playing song
  const delay = 500;
  const dispatch = useDispatch();
  const song: Song | undefined = useSelector(
    (state: RootState) => state.dashboard.song
  );
  const [
    getSongStats,
    { data: songStatsData, isFetching: isFetchingSongStats },
  ] = useLazyGetSongStatsQuery();

  const access_token = getAccessTokenFromUrl(window.location.href);

  if (access_token) {
    dispatch(setToken(access_token));
  } else {
    callSpotifyAuthorize();
  }
  const { data } = spotifyApi.useGetNowPlayingQuery(undefined, {
    pollingInterval: delay,
  });

  useEffect(() => {
    if (data) {
      const newSong: Song = SpotifyDataToSong(data);
      if (isDifferentSong(newSong, song)) {
        // call stats
        getSongStats({
          spotify_uri: newSong.spotify_uri,
          year: new Date().getFullYear(),
        });
      }
      dispatch(setSong(newSong));
    }
  }, [data]);

  useEffect(() => {
    if (!isFetchingSongStats) {
      dispatch(setSongStats(songStatsData));
    }
  }, [songStatsData, isFetchingSongStats, dispatch]);

  // For testing only
  useEffect(() => {
    dispatch(
      setSongStats({
        position: 10,
        value: 11,
        voters: ["Kai", "Owen", "Jordi", "Sanne"],
      })
    );
  }, []);

  return (
    <FullScreenDashboard>
      <SongInfo />
      {/* <Lyrics/> */}
    </FullScreenDashboard>
  );
};
