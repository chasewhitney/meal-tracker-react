import styled from "styled-components";

export const CommonCell = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  background-color: #ffffff;
  color: black;
  padding: 1rem;

  & img {
    height: 40px;
    margin-right: 2rem;
  }

  &:hover {
    background-color: #eeeeee;
  }
`;

export const CellContainer = styled.div``;

export const Header = styled.h2`
  background-color: #ffffff;
  color: black;
`;
