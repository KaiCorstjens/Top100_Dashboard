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
