import styled from "styled-components";
import Modal from "styled-react-modal";

export const Popup = Modal.styled`
  /* width: 20rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f8f8f8;
  padding: 1rem;
  box-shadow: .4rem .6rem .8rem #363636;
`;

export const DashboardContainer = styled.div`
  padding: 5rem;
  margin: auto;
  width: 90%;

  @media only screen and (max-width: 1200px) {
    padding: 2.5rem;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding: 0;
  }
`;

export const DashboardContent = styled.div`
  font-size: 1.5rem;
  display: flex;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  box-shadow: 0.5rem 1rem 5rem #363636;
  width: 100%;
  min-width: 90rem;
`;

export const Main = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
`;
