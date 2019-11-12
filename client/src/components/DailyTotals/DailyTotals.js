import React from "react";
import * as S from "./DailyTotals.jsx.js";

const calcDailyTotals = meals => {
  const totals = {};
  meals.forEach(meal => {
    for (let prop in meal) {
      if (
        typeof meal[prop] === "number" &&
        prop !== "servings" &&
        prop !== "__v"
      ) {
        if (totals[prop]) {
          totals[prop] += meal[prop] * meal["servings"];
        } else {
          totals[prop] = meal[prop] * meal["servings"];
        }
      }
    }
  });
  return totals;
};

const getNetClass = totals => {
  if (totals.carbs - totals.fiber <= 30) {
    return "green";
  } else {
    return "red";
  }
};

export default props => {
  if (props.meals.length === 0) {
    return <S.TodayTotals>No meals entered today</S.TodayTotals>;
  }
  const totals = calcDailyTotals(props.meals);
  return (
    <S.TodayTotals>
      <h2>Daily Totals:</h2>
      <S.TotalCell>
        <h3>Calories</h3>
        <div>{totals.calories}</div>
      </S.TotalCell>
      <S.TotalCell>
        <h3>Fat</h3>
        <div>{totals.fat}g</div>
      </S.TotalCell>
      <S.TotalCell>
        <h3>Protein</h3>
        <div>{totals.protein}g</div>
      </S.TotalCell>
      <S.TotalCell>
        <h3>Carbs</h3>
        <div>{totals.carbs}g</div>
      </S.TotalCell>
      <S.TotalCell>
        <h3>Fiber</h3>
        <div>{totals.fiber}g</div>
      </S.TotalCell>
      <S.TotalCell>
        <h3>Sugar</h3>
        <div>{totals.sugar}g</div>
      </S.TotalCell>
      <S.NetCell>
        <h3>Net Carbs</h3>
        <div className={getNetClass(totals)}>
          {totals.carbs - totals.fiber}g
        </div>
      </S.NetCell>
    </S.TodayTotals>
  );
};
