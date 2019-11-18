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

export const BrandedCell = styled.div`
  color: black;

  font-size: 1.5rem;

  display: grid;
  grid-template-columns: min-content 1fr min-content;
  align-items: center;
  justify-items: start;

  & img {
    height: 40px;
    margin-right: 2rem;
    grid-row: 1 / 3;
    grid-column: 1 / 2;
  }
  & .name {
    grid-row: 1 / 2;
    grid-column: 2 /3;
  }
  & .brand {
    grid-row: 2 / 3;
    grid-column: 2 /3;
  }
  & .cal {
    grid-row: 1 / 3;
    grid-column: 3 / 4;
  }
`;
