import styled from "styled-components";
import { deviceWidth } from "../../../../app/media";

export const SponsorsContainer = styled.div`
  max-width: 400px;
  width: auto;
  height: 200px;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
  right: 0;
  top: 0;
  text-align: center;
  cursor: pointer;
  display: flex;
  @media (${deviceWidth.tablet}) {
    display: none;
  }
`;

export const SponsorsImage = styled.img`
  max-height: 200px;
  object-fit: contain;
`;
