import styled from "styled-components";
import { device } from "../../../../app/media";

export const AlbumArtContainer = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  border: 2px solid ${(props) => props.theme.borderColor};
  background-color: rgba(0, 0, 0, 0.75);
  width: 33vw;
  float: left;
  @media (${device.laptopL}) {
    width: 100%;
    float: inherit;
  }
`;

export const SongInfoContainer = styled.div`
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  @media (${device.laptopL}) {
    margin-top: 10%;
    width: 90vw;
  }
`;
