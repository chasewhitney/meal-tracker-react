import styled from "styled-components";

export const Sidebar = styled.div`
  flex: 1 0 20%;
  flex-direction: column;
  border-right: 1px solid grey;
  min-height: 80vh;
  padding: 0.5rem;
  align-items: center;
  text-align: center;

  & * {
    margin: 1rem;
  }

  & h1 {
    margin: 0;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
  }
`;

export const FavItem = styled.div`
  color: white;
  border: 1px solid black;
  position: relative;
  padding: 0;
  cursor: pointer;
  border-radius: 0.3rem;
  background-color: #00a266;

  &:hover {
    background-color: #006f46;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  }

  &:active {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);

  }

  & button {
    position: absolute;
    top: -.9rem;
    right: -.7rem;
    font-size: 1rem;
    color: #b42857;
    font-weight: 900;
    cursor: pointer;
    transform: translateY(2px);
    width: 2rem;
    height: 2rem;

    &:hover {
      background-color: pink;
    }
  }
`;
