import styled from "styled-components";
import { Button } from "../../resources/styledComponentTemplates.js";

export const Inputs = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 5rem;
  border-bottom: 1px solid black;
  padding: 3rem 2rem;

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

export const AddMealButton = styled(Button)`
  background: #00a266;
  padding: 0.6rem 0.5rem;
  margin-right: auto;
  cursor: pointer;

  &:hover {
    background: #006f46;
  }
`;
