import styled from "styled-components";

export const ContentContainer = styled.div`
  pointer-events: auto;
  background-color: #ffffff;
  padding: 0 1.2rem 1.2rem 1.2rem;
`;

export const Header = styled.h3`
  color: black;
  text-align: center;
  text-transform: uppercase;
  padding: 1.4rem;
`;

export const CellContainer = styled.div`
  margin: 0;
  padding: 0.3rem 0.6rem;
  border-bottom: 0.1rem solid black;

  &:hover {
    background-color: #e3e3e3;
  }
`;

export const CommonCell = styled.div`
  height: 4rem;
  font-size: 1.5rem;
  color: black;
  align-items: center;

  display: grid;
  grid-template-columns: min-content 1fr;

  & img {
    max-width: 4rem;
    margin-right: 2rem;
    grid-column: 1 / 2;
  }

  & span {
    grid-column: 2 / 3;
  }
`;
