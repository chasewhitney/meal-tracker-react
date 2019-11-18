import styled from "styled-components";
import { Button } from "../../resources/styledComponentTemplates.js";

export const ButtonDiv = styled.div`
  margin-top: -1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CancelButton = styled(Button)`
  background: #a2003c;

  &:hover {
    background: #6f0029;
  }
`;

export const SubmitButton = styled(Button)`
  background: #00a266;

  &:hover {
    background: #006f46;
  }
`;

export const Header = styled.div`
  font-size: 2.5rem;
  text-align: center;
  width: 80%;
  padding: 0.3rem;
  border-bottom: 1px solid black;
  margin: 1.2rem auto;
`;
