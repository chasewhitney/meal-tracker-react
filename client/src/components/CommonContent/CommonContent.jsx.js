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
  max-width: 37.6rem;

  &:hover {
    background-color: #e3e3e3;
    cursor: pointer;
  }
`;

export const CommonCell = styled.div`
  height: 4rem;
  font-size: 1.5rem;
  color: black;

  display: flex;
  justify-content: start;
  align-items: center;

  & img {
    max-height: 4rem;
    max-width: 4rem;
    margin-right: 2rem;
  }

  & span {
  }
`;
