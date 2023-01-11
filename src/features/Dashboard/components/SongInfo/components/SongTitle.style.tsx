import styled from "styled-components";

export const SongContainer = styled.div`
  font-size: ${(props) => props.theme.titleFontSize};
  width: 100%;
`;

export const SongNumber = styled.div`
  width: 75px;
  height: 75px;
  margin-right: 5%;
  vertical-align: middle;
  display: table-cell;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.positionBgColor};
  border-radius: ${(props) => props.theme.positionBorderRadius} 0px;
  text-align: center;
`;

export const SongNumberContainer = styled.div`
  width: 75px;
  float: left;
`;

export const SongTitleContainer = styled.div`
  vertical-align: middle;
  text-align: center;
  color: ${(props) => props.theme.textColor};
  width: 100%;
`;
