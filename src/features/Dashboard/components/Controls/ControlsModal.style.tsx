import styled from "styled-components";

export const ModalContainer = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
`;

export const ModalClose = styled.span`
  color: #444;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalHeader = styled.div`
  padding: 2px 16px;
  background-color: ${(props) => props.theme.positionBgColor};
  color: ${(props) => props.theme.textColor};
`;

export const ModalBody = styled.div`
  padding: 2px 16px;
`;

export const ModalFooter = styled.div`
  padding: 2px 16px;
  background-color: ${(props) => props.theme.positionBgColor};
  color: ${(props) => props.theme.textColor};
`;
