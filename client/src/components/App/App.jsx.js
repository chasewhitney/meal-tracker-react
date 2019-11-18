import styled from "styled-components";
import img from "../../resources/icons/board-bg.jpeg";

export const AppContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 100vh;
  max-height: 100vh;
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
`;
