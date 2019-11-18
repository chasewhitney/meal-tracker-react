import styled from "styled-components";

export const CommonCell = styled.div`
  display: flex;
  align-items: center;
  color: black;

  font-size: 1.5rem;

  & img {
    height: 40px;
    margin-right: 2rem;
  }
`;

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
