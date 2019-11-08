import styled from "styled-components";

export const Sidebar = styled.div`
  flex: 1 0 20%;
  flex-direction: column;
  border-right: 1px solid grey;
  min-height: 80vh;
  align-items: center;
  text-align: center;

  & * {
    margin: 1rem;
  }
`;

export const FavItem = styled.div`
  border: 1px solid black;
  position: relative;
  padding: 1rem 1rem;
  cursor: pointer;
  border-radius: 0.5rem;

  & button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
