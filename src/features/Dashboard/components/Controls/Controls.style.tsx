import styled from "styled-components";

export const ControlsContainer = styled.div`
  width: 50px;
  height: 100px;
  opacity: 0;
  position: absolute;
  &:hover {
    opacity: 1;
  }
`;

export const SlidoControlButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ddd;
`;

export const PollIntervalControlButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: #aaa;
`;
