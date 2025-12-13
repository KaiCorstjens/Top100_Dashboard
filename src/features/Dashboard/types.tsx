export type Song = {
  title: string;
  artist: string;
  duration: number;
  time_elapsed: number;
  spotify_uri: string;
  album_art_url: string | undefined;
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

export type SpotifyTokenResponse = {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}

/*
access_token	string	An access token that can be provided in subsequent calls, for example to Spotify Web API services.
token_type	string	How the access token may be used: always "Bearer".
scope	string	A space-separated list of scopes which have been granted for this access_token
expires_in	int	The time period (in seconds) for which the access token is valid.
refresh_token	string	See refreshing tokens.
*/

// Not all fields are implemented
export type SpotifyPlayingResponse = {
  timestamp: number;
  progress_ms: number;
  item: SpotifyItem;
};

export type SpotifyItem = {
  album: SpotifyAlbum;
  name: string;
  artists: SpotifyArtist[];
  is_playing: boolean;
  duration_ms: number;
  uri: string;
};

export type SpotifyAlbum = {
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
  track: string;
  points: number;
  position: number;
  number_of_votes: number;
  voters: SongVoter[];
};

export type SongVoter = {
  submitter_name: string;
};
