import React from 'react';
import styled from 'styled-components';

const TodayTotals = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

const calcDailyTotals = (meals) => {
  const totals = {};
  meals.forEach(val => {
    for(let prop in val){
      if(typeof val[prop] === "number" && prop !== "servings" && prop !== "__v"){
        if(totals[prop]) {
          totals[prop] += val[prop] * val["servings"];
        } else {
          totals[prop] = val[prop] * val["servings"];
        }
      }
    }
  });
  return totals;
}

export default props => {
  if(props.meals.length === 0) {
    return <TodayTotals>No meals entered today</TodayTotals>;
  }
  const totals = calcDailyTotals(props.meals)
  return (
    <TodayTotals>
      <div>TOTALS:</div>
      <div>{totals.calories} calories</div>
      <div>{totals.fat}g fat</div>
      <div>{totals.protein}g protein</div>
      <div>{totals.carbs}g carbs</div>
      <div>{totals.fiber}g fiber</div>
      <div>{totals.sugar}g sugar</div>
      <div>{totals.carbs - totals.fiber}g net carbs</div>
    </TodayTotals>
  )
};
