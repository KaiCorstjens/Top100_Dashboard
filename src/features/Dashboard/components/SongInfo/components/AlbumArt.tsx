import { AlbumArtImage, StyledAlbumArt } from "./AlbumArt.style";

export type AlbumArtProps = { album_art_url: string | undefined };

export const AlbumArt: React.FC<AlbumArtProps> = (props) => (
  <StyledAlbumArt>
    <AlbumArtImage src={props.album_art_url} alt="Album art" />
  </StyledAlbumArt>
);
