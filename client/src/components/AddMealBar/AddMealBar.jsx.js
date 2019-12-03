import styled from "styled-components";
import { Button } from "../../resources/styledComponentTemplates.js";

export const Inputs = styled.div`
  height: 6rem;
  padding: 0 2rem 1rem 2rem;
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid black;

  & > * {
    margin: 1rem;
  }
`;

export const DateBox = styled.div`
  font-size: 2.5rem;
  text-align: center;
`;

export const ApiSearch = styled.input`
  width: 100%;
  line-height: 2.8rem;
  padding-left: 0.5rem;
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
