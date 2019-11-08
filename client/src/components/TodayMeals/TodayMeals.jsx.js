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
  }
`;

export const TodayMeals = styled.div`
  display: flex;
  flex-direction: column;
`;
