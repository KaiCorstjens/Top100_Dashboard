import styled from "styled-components";

export const StyledAlbumArt = styled.div`
  aspect-ratio: 1 / 1;
  width: 100%;
  background-image: ${(props) => props.theme.unknownAlbum};
  background-size: contain;
  background-repeat: no-repeat;
`;

export const AlbumArtImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
