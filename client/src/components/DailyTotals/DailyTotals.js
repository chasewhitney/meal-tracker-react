import React from "react";
import * as S from "./DailyTotals.jsx.js";
import { TotalsToCalculate } from "../../fields/fields.js";
// const calcDailyTotals = meals => {
//   console.log("in calcDailyTotals with:", meals);
//   const totals = {};
//   meals.forEach(meal => {
//     for (let prop in meal) {
//       if (
//         typeof meal[prop] === "number" &&
//         prop !== "servings" &&
//         prop !== "__v"
//       ) {
//         if (totals[prop]) {
//           totals[prop] += meal[prop] * meal["servings"];
//         } else {
//           totals[prop] = meal[prop] * meal["servings"];
//         }
//       }
//     }
//   });
//   console.log("Returning from calcDailyTotals:", totals);
//   return totals;
// };

const calcDailyTotals = meals => {
  console.log("in calcDailyTotals with:", meals);

  const totals = meals.reduce((t, v) => {
    TotalsToCalculate.forEach(nutrient => {
      t[nutrient] = t[nutrient]
        ? t[nutrient] + v[nutrient] * v.servings
        : v[nutrient] * v.servings;
    });
    return t;
  }, {});

  console.log("Returning from calcDailyTotals:", totals);
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
    return <S.NoTotals>No entries yet today..</S.NoTotals>;
  }
  const totals = calcDailyTotals(props.meals);
  return (
    <S.TodayTotals>
      <S.TotalsHeader>Daily Totals:</S.TotalsHeader>
      <S.TotalCell>
        <S.TotalCellHeader>Calories</S.TotalCellHeader>
        <div>{totals.calories}</div>
      </S.TotalCell>
      <S.TotalCell>
        <S.TotalCellHeader>Fat</S.TotalCellHeader>
        <div>{totals.fat}g</div>
      </S.TotalCell>
      <S.TotalCell>
        <S.TotalCellHeader>Protein</S.TotalCellHeader>
        <div>{totals.protein}g</div>
      </S.TotalCell>
      <S.TotalCell>
        <S.TotalCellHeader>Carbs</S.TotalCellHeader>
        <div>{totals.carbs}g</div>
      </S.TotalCell>
      <S.TotalCell>
        <S.TotalCellHeader>Fiber</S.TotalCellHeader>
        <div>{totals.fiber}g</div>
      </S.TotalCell>
      <S.TotalCell>
        <S.TotalCellHeader>Sugar</S.TotalCellHeader>
        <div>{totals.sugar}g</div>
      </S.TotalCell>
      <S.NetCell>
        <S.TotalCellHeader>Net Carbs</S.TotalCellHeader>
        <div className={getNetClass(totals)}>
          {totals.carbs - totals.fiber}g
        </div>
      </S.NetCell>
    </S.TodayTotals>
  );
};
