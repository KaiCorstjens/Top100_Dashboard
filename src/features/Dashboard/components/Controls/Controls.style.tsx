import styled from "styled-components";

export const ControlsContainer = styled.div`
  width: 50px;
  display: none;
  position: absolute;
  overflow: hidden;
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

export const SponsorsControlButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: #888;
`;

export const ControlsIconContainer = styled.div`
  opacity: 0;
  position: absolute;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
