import styled from "styled-components";
import { deviceWidth } from "../../../../app/media";

export const PosterContainer = styled.div`
  float: right;
  width: 200px;
  height: 200px;
  cursor: pointer;
  @media (${deviceWidth.tablet}) {
    display: none;
  }
`;

export const PosterImage = styled.img`
  width: 25vw;
  margin-top: 150px;
  margin-left: 2vw;
`;
