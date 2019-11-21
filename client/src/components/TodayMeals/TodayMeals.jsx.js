import styled from "styled-components";

export const MealItem = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(8, 1fr);
  padding: 1rem;
  border-bottom: 1px solid grey;
  justify-items: center;
  align-items: center;

  & div {
    align-self: center;
    padding: 0.2rem;
    margin: 0.1rem;
  }
`;

export const TodayMeals = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  left: 0;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
`;

export const Button = styled.div`
  border-radius: 0.2rem;
  padding: 0;
  background-color: #00a266;
  border: 1px solid black;
  cursor: pointer;
  margin: 0.3rem !important;

  &:hover {
    background-color: #1f8a66;
    color: #fff;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(0);
  }

  & img {
    height: 1.7rem;
    margin-top: 0.3rem;
    filter: invert(22%) sepia(53%) saturate(2800%) hue-rotate(316deg)
      brightness(91%) contrast(93%);
  }
`;