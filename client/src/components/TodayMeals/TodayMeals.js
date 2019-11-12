import React from "react";
import { connect } from "react-redux";
import * as S from "./TodayMeals.jsx.js";
import * as actions from "../../actions";
import axios from "axios";

export default connect(
  null,
  actions
)(props => {
  if (!props.todayMeals) {
    return null;
  }
  return (
    <S.TodayMeals>
      {props.todayMeals.map(item => {
        return (
          <S.MealItem key={item._id}>
            <div style={{ display: "flex" }}>
              <img
                style={{ height: "50px", marginRight: "2rem" }}
                src={item.img}
                alt="Food item"
              />
              <div>
                <div style={{ textAlign: "center" }}>{item.name}</div>
                <div style={{ textAlign: "center" }}>
                  {item.servings} {item.servings > 1 ? "servings" : "serving"}
                </div>
              </div>
            </div>
            <div>{item.calories * item.servings} calories</div>
            <div>{item.fat * item.servings}g fat</div>
            <div>{item.protein * item.servings}g protein</div>
            <div>{item.carbs * item.servings}g carbs </div>
            <div>{item.fiber * item.servings}g fiber</div>
            <div>{item.sugar * item.servings}g sugar</div>
            <div>{(item.carbs - item.fiber) * item.servings}g net carbs</div>
            <div>
              <button onClick={() => props.addMealToFavorites(item)}>
                Favorite
              </button>
              <button onClick={() => props.onEdit(item)}>Edit</button>
              <button onClick={() => props.onDelete(item._id)}>Delete</button>
            </div>
          </S.MealItem>
        );
      })}
    </S.TodayMeals>
  );
});
