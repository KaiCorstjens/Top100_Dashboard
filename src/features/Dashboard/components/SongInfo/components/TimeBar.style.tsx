import styled from "styled-components";
import { deviceWidth } from "../../../../../app/media";

export const TimeBarContainer = styled.div`
  font-size: 22px;
  table-layout: fixed;
  width: 100%;
  color: #fff;
  display: table;
  height: 45px;
`;

export const TimeContainer = styled.div`
  display: table-cell;
  height: 100%;
  width: 15%;
  vertical-align: middle;
  text-align: center;
`;

export const TimeBarProgressionContainer = styled.div`
  display: table-cell;
  @media (${deviceWidth.tablet}) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const TimeBarProgression = styled.div`
  background-color: ${(props) => props.theme.timeBarColor};
  height: 50px;
`;
