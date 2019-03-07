import React from 'react';
import styled from 'styled-components';

const TodayTotals = styled.div`
  font-size: 1.8rem;
  border-bottom: solid 1px grey;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TotalCell =  styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  & div {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

const NetCell =  styled(TotalCell)`
  border-left: 1px solid grey;

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
      <h2>TOTALS:</h2>
      <TotalCell>
        <h3>Calories</h3>
        <div>{totals.calories}</div>
      </TotalCell>
      <TotalCell>
        <h3>Fat</h3>
        <div>{totals.fat}g</div>
      </TotalCell>
      <TotalCell>
        <h3>Protein</h3>
        <div>{totals.protein}g</div>
      </TotalCell>
      <TotalCell>
        <h3>Carbs</h3>
        <div>{totals.carbs}g</div>
      </TotalCell>
      <TotalCell>
        <h3>Fiber</h3>
        <div>{totals.fiber}g</div>
      </TotalCell>
      <TotalCell>
        <h3>Sugar</h3>
        <div>{totals.sugar}g</div>
      </TotalCell>
      <NetCell>
        <h3>Net Carbs</h3>
        <div style={{fontSize: "4rem"}}>{totals.carbs - totals.fiber}g</div>
      </NetCell>
    </TodayTotals>
  )
};
