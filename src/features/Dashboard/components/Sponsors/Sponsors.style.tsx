import styled from "styled-components";
import { device } from "../../../../app/media";

export const SponsorsContainer = styled.div`
  width: 200px;
  height: 200px;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
  right: 0;
  top: 0;
  text-align: center;
  cursor: pointer;
  @media (${device.laptopL}) {
    display: none;
  }
`;

export const SponsorsImage = styled.img`
  max-height: 200px;
`;
