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
            <S.ImageNameContainer className="ImageNameContainer">
              <S.ImageContainer className="ImageContainer">
                <S.MealImage
                  className="MealImage"
                  src={item.img}
                  alt="Food item"
                />
              </S.ImageContainer>
              <S.NameContainer className="NameContainer">
                <div>{item.name}</div>
                <S.Servings>
                  {item.servings} {item.servings > 1 ? "servings" : "serving"}
                </S.Servings>
              </S.NameContainer>
            </S.ImageNameContainer>
            <S.NutritionCell>
              {item.calories * item.servings} calories
            </S.NutritionCell>
            <S.NutritionCell>{item.fat * item.servings}g fat</S.NutritionCell>
            <S.NutritionCell>
              {item.protein * item.servings}g protein
            </S.NutritionCell>
            <S.NutritionCell>
              {item.carbs * item.servings}g carbs{" "}
            </S.NutritionCell>
            <S.NutritionCell>
              {item.fiber * item.servings}g fiber
            </S.NutritionCell>
            <S.NutritionCell>
              {item.sugar * item.servings}g sugar
            </S.NutritionCell>
            <S.NutritionCell>
              {(item.carbs - item.fiber) * item.servings}g net carbs
            </S.NutritionCell>
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
