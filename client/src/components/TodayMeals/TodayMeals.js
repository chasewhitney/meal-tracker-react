import React from "react";
import { connect } from "react-redux";
import * as S from "./TodayMeals.jsx.js";
import * as actions from "../../actions";

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
            <S.ButtonContainer className="ButtonContainer">
              <S.Button onClick={() => props.addMealToFavorites(item)}>
                <img
                  src={require("../../resources/icons/heart.png")}
                  alt="Add to favorites"
                />
              </S.Button>
              <S.Button onClick={() => props.onEdit(item)} toolTip="Edit">
                <img
                  src={require("../../resources/icons/pencil.png")}
                  alt="Edit"
                />
              </S.Button>
              <S.Button onClick={() => props.onDelete(item._id)}>
                <img
                  src={require("../../resources/icons/bin.png")}
                  alt="Delete entry"
                />
              </S.Button>
            </S.ButtonContainer>
          </S.MealItem>
        );
      })}
    </S.TodayMeals>
  );
});
