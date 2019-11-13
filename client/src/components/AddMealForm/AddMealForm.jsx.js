import styled from "styled-components";

export const ButtonDiv = styled.div`
  margin-top: -1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CancelButton = styled.button`
  color: white;
  border-radius: 4px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin: 0 0.3rem;
  padding: 0.5rem;
  background: rgb(202, 60, 60);

  &:hover {
    background: #a83131;
  }
`;

export const SubmitButton = styled.button`
  color: white;
  border-radius: 4px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin: 0 0.3rem;
  padding: 0.5rem;
  background: rgb(28, 184, 65);

  &:hover {
    background: #199e39;
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
