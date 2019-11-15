import styled from "styled-components";
import Modal from "styled-react-modal";

export const Popup = Modal.styled`
  /* width: 20rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f8f8f8;
  padding: 10px;
  box-shadow: .4rem .6rem .8rem #363636;
`;

export const DashboardContainer = styled.div`
  background-color: #f8f8f8;
  padding: 4rem;
`;

export const DashboardContent = styled.div`
  font-size: 1.5rem; //temp
  display: flex;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  box-shadow: 0.5rem 1rem 5rem #363636;
  max-width: 117rem;
`;

export const Main = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
`;
