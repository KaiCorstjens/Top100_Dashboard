import styled from "styled-components";

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
`;

export const SongVotersContainer = styled.div`
  font-size: ${(props) => props.theme.votersFontSize};
`;
