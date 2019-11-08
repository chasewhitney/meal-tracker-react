import React from "react";
import { connect } from "react-redux";
import * as S from "./TodayMeals.jsx.js";
import * as actions from "../../actions";
import axios from "axios";

const deleteMeal = async (id, callback) => {
  console.log("deleting meal:", id);
  const res = await axios.delete(`/meals/deleteMeal/${id}`);
  callback(res.data);
};

export default connect(
  null,
  actions
)(props => {
  if (!props.meals) {
    return null;
  }
  return (
    <S.TodayMeals>
      {props.meals.map(item => {
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
              <button onClick={() => props.addToFavorites(item)}>
                Favorite
              </button>
              <button onClick={() => props.onEdit(item)}>Edit</button>
              <button onClick={() => deleteMeal(item._id, props.update)}>
                Delete
              </button>
            </div>
          </S.MealItem>
        );
      })}
    </S.TodayMeals>
  );
});

// <button onClick={() => {this.props.addToFavorites(item)}}>Favorite</button>
// <button>Edit</button>
// <button onClick={() => {this.handleMealDelete(item._id)}}>Delete</button>

// handleMealSubmit = async (e, itemToAdd) => {
//   e.preventDefault();
//   console.log('in submitNewMeal:', itemToAdd);
//   await this.props.submitNewMeal(itemToAdd);
//   await this.setState({meals: this.props.todayMeals});
//   console.log('this.state.meals hMS:', this.state.meals);
//   this.calcDailyTotals();
// }
//
// handleMealDelete = async (id) => {
//   await this.props.deleteMeal(id);
//   await this.setState({meals: this.props.todayMeals});
//   console.log('this.state.meals hMD:', this.state.meals);
//   this.calcDailyTotals();
// }
