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
  }
`;

export const BrandedCell = styled.div`
  height: 4rem;
  font-size: 1.5rem;
  color: black;
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  max-width: 4rem;
  margin-right: 2rem;
`;

export const NameAndBrandContainer = styled.div`
  width: 100%;
`;

export const NameCell = styled.div`
  max-width: 26.8rem;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const BrandCell = styled.div`
  font-size: 1.2rem;
  max-width: 26.8rem;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-style: italic;
`;

export const CalsCell = styled.div`
  text-align: right;
`;
