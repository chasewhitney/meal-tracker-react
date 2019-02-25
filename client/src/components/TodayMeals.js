import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../actions';

const MealItem = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
`;

const TodayMeals = styled.div`
  background-color: orangered;
  display: flex;
  flex-direction: column;
`;

export default connect(null, actions)((props) => {
  if(!props.meals){
    return null;
  }
  return (
    <TodayMeals>
      {props.meals.map(item => {
        return (
          <MealItem key={item._id}>
            <div style={{display: "flex"}}>
              <img style={{height: "40px"}} src={item.img} alt="Food item" />
              <div>{item.name}</div>
              <div>{item.servings}servings</div>
            </div>
            <div>{item.calories} calories</div>
            <div>fat: {item.fat}g</div>
            <div>protein: {item.protein}g</div>
            <div>carbs: {item.carbs}g</div>
            <div>fiber: {item.fiber}g</div>
            <div>sugar: {item.sugar}g</div>
            <div>net carbs: {item.carbs - item.fiber}g</div>
            <div>
              <button onClick={() => props.addToFavorites(item)}>Favorite</button>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </MealItem>
        )
      })}
    </TodayMeals>
  )
})

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
