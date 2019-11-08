import styled from "styled-components";

export const Inputs = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 5rem;
  border-bottom: 1px solid black;
  padding: 3rem;

  & > * {
    margin: 1rem;
  }

  & .date {
    font-size: 2.5rem;
  }
`;

export const ApiSearch = styled.input`
  width: 100%;
  line-height: 2.8rem;
`;

export const ApiBox = styled.div`
  position: relative;
  width: 40rem;
  outline: none;

  display: flex;
  flex-direction: column;
`;

export const AddMealButton = styled.button`
  margin-right: auto;
`;
