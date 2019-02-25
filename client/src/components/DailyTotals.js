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
          totals[prop] += val[prop];
        } else {
          totals[prop] = val[prop];
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
      {Object.keys(totals).map(key => {
        if(key === "calories") {return <div key={key}>{key}:{totals[key]}</div>}
        return <div key={key}>{key}:{totals[key]}g</div>
      })}
      <div>Net Carbs: {totals.carbs - totals.fiber}g</div>
    </TodayTotals>
  )
};
