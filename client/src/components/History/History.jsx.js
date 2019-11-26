import styled from "styled-components";

export const HistoryContainer = styled.div`
  padding: 5rem;
  margin: auto;
  width: 80%;
`;

export const HistoryContent = styled.div`
  font-size: 1.5rem; //temp
  display: flex;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  box-shadow: 0.5rem 1rem 5rem #363636;
  width: 100%;
`;

export const Main = styled.div`
  width: 100%;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Sidebar = styled.div`
  flex: 1 0 20%;
  flex-direction: column;
  border-right: 1px solid grey;
  min-height: 80vh;
  align-items: center;
  text-align: center;

  & * {
    margin: 1rem;
  }

  & h1 {
    border-bottom: 1px solid black;
    padding: 1.05rem;
  }
`;
