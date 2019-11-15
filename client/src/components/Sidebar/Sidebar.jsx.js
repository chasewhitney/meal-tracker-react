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

  & h1 {
    border-bottom: 1px solid black;
    padding: 1.05rem;
  }
`;

export const FavItem = styled.div`
  border: 1px solid black;
  position: relative;
  padding: 0;
  cursor: pointer;
  border-radius: 0.3rem;
  background-color: #28b485;

  &:hover {
    background-color: #1f8a66;
  }

  & button {
    position: absolute;
    bottom: -0.7rem;
    right: -0.7rem;
    font-size: 1rem;
    color: #b42857;
    font-weight: 900;
    cursor: pointer;
  }
`;
