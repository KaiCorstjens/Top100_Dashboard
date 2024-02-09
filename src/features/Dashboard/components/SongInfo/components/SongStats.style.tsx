import styled from "styled-components";
import { deviceWidth } from "../../../../../app/media";

export const SongStatsContainer = styled.div`
  position: relative;
  width: 200px;
  margin-top: 15%;
  display: table-cell;
  vertical-align: middle;
  font-size: ${(props) => props.theme.statsFontSize};
  background-color: rgba(0, 0, 0, 0.75);
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 10px;
  padding-bottom: 20px;
  border-radius: 0 ${(props) => props.theme.borderRadius}
    ${(props) => props.theme.borderRadius} 0;
  color: ${(props) => props.theme.textColor};
  float: left;
  max-height: 500px;
  overflow: hidden;
  @media (${deviceWidth.tablet}) {
    margin-top: 0px;
    width: 100%;
    border-radius: ${(props) => props.theme.borderRadius};
    font-size: 20px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const SongVotersContainer = styled.div`
  font-size: ${(props) => props.theme.votersFontSize};
`;

export const SongStatsMobileContainer = styled.div`
  @media (${deviceWidth.tablet}) {
    margin-left: 5%;
  }
`;
