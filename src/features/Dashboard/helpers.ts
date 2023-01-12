import { SPOTIFY_CLIENT_ID } from "../../app/constants";
import { Song, SpotifyAlbumImage, SpotifyPlayingResponse } from "./types";

export const SpotifyDataToSong = (
  spotifySong: SpotifyPlayingResponse
): Song => {
  const getHighestResAlbumArt = (
    albumImages: SpotifyAlbumImage[]
  ): string | undefined => {
    const highestResolution = Math.max(...albumImages.map((img) => img.height));
    const highestResolutionImage = albumImages.find(
      (img) => img.height === highestResolution
    );
    return highestResolutionImage?.url ?? undefined;
  };

  const receivedSong: Song = {
    title: spotifySong?.item?.name,
    artist: spotifySong?.item?.artists.map((a) => a.name)?.join(", "),
    duration: spotifySong?.item?.duration_ms,
    time_elapsed: spotifySong?.progress_ms,
    spotify_uri: spotifySong?.item?.uri,
    album_art_url: getHighestResAlbumArt(
      spotifySong?.item?.album?.images ?? []
    ),
  };

  return receivedSong;
};

export const getAccessTokenFromUrl = (url: string) => {
  if (url === undefined) {
    return undefined;
  }
  const access_token_first_split = url.split("access_token=");
  if (access_token_first_split.length < 2) {
    return undefined;
  }
  const access_token_param = access_token_first_split[1].split("&");
  if (access_token_param.length < 1) {
    return undefined;
  }
  return access_token_param[0];
};

export const callSpotifyAuthorize = () => {
  const client_id = SPOTIFY_CLIENT_ID;
  const response_type = "token";
  let site_url = window.location.href;
  site_url = site_url.substring(0, site_url.lastIndexOf("/"));

  const scope = "user-read-currently-playing";
  const redirect_uri = site_url + "?spotify_redirect&";
  const state = "redirected-from-spotify";

  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=" + encodeURIComponent(response_type);
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  url += "&state=" + encodeURIComponent(state);
  window.location.href = url;
};

export const isDifferentSong = (
  song1: Song | undefined,
  song2: Song | undefined
): boolean => {
  if (song1?.artist === song2?.artist && song1?.title === song2?.title) {
    return false;
  } else {
    return true;
  }
};
