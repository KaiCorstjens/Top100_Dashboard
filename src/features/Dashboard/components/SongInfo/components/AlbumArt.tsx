import { AlbumArtImage, StyledAlbumArt } from "./AlbumArt.style";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export type AlbumArtProps = { album_art_url: string | undefined };

export const AlbumArt: React.FC<AlbumArtProps> = (props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <StyledAlbumArt>
      <AlbumArtImage
        src={props.album_art_url ?? themeContext.unknownAlbum}
        alt="Album art"
      />
    </StyledAlbumArt>
  );
};
