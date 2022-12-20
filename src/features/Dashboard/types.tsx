export type Song = {
  title: string;
  artist: string;
  duration: number;
  time_elapsed: number;
  spotify_uri: string;
  album_art_url: string;
};

export type SpotifyAuthorizeResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  state: string;
};

export type SpotifyAuthorizeRequest = {
  client_id: string;
  response_type: string;
  redirect_uri: string;
  state: string;
  scope: string;
  show_dialog: boolean;
};

// Not all fields are implemented
export type SpotifyPlayingResponse = {
  timestamp: number;
  progress_ms: number;
  item: SpotifyItem;
};

export type SpotifyItem = {
  album: SpotifyAlbum;
  name: string;
  is_playing: boolean;
  duration_ms: number;
  uri: string;
};

export type SpotifyAlbum = {
  artists: SpotifyArtist[];
  images: SpotifyAlbumImage[];
  name: string;
};

export type SpotifyArtist = {
  name: string;
};

export type SpotifyAlbumImage = {
  height: number;
  url: string;
  width: number;
};

export type SongStats = {
  position: number;
  value: number;
  voters: string[];
};
