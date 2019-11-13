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
`;

export const DashboardContent = styled.div`
  font-size: 1.5rem; //temp
  display: flex;
  margin: 4rem auto;
  background-color: white;
  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.06);
  max-width: 117rem;
`;

export const Main = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
