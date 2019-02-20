//// Landing page after login ////

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../actions';

import AddMeal from './AddMeal';


const Container = styled.div`
  font-size: 1.5rem; //temp
  display: flex;
`;

const Sidebar = styled.div`
  background-color: yellow;
  flex: 0 1 25%;
  flex-direction: column;
`;

const Main = styled.div`
  background-color: green;
  width: 100%;


  display: flex;
  flex-direction: column;
`;

const TodayTotals = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

const TodayMeals = styled.div`
  background-color: orangered;
  display: flex;
  flex-direction: column;
`;

const MealItem = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
`;

class Dashboard extends Component {
  state = {meals: [], totals: {}};
  async componentDidMount(){
    console.log('Dashboard mounted');
    console.log('Dashboard:prefetch');
    await this.props.fetchMealsToday();
    console.log('Dashboard:postfetch');
    console.log('presetStateMeals');
    await this.setState({meals: this.props.todayMeals});
    console.log('posttStateMeals');
    console.log('this.state.meals:', this.state.meals);
    this.calcDailyTotals();
  }

  calcDailyTotals = () => {
    console.log('in calcDailyTotals with:', this.state.meals);
    const { meals } = this.state;
    const totals = {};
    meals.forEach(val => {
	    for(let prop in val){
        if(typeof val[prop] === "number" && prop != "servings" && prop != "__v"){
    	    if(totals[prop]) {
      	    totals[prop] += val[prop];
          } else {
      	    totals[prop] = val[prop];
          }
        }
      }
    });

    this.setState({totals});
  }

  addToFavorites = (item) => {
    console.log('in addToFavorites with:', item);
    this.props.addToFavorites(item);
  }

  renderMeals = () => {
    if(!this.state){
      return null;
    }
    return (
      <TodayMeals>
        {this.state.meals.map(item => {
          return (
            <MealItem key={item._id}>
              <div>
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
                <button onClick={() => {this.addToFavorites(item)}}>Favorite</button>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </MealItem>
          )
        })}
      </TodayMeals>
    )
  }

  renderTotals = () => {
    const { totals } = this.state;
    if(this.state.meals.length === 0) {
      return <div>No meals entered today</div>;
    }
    return (
      <TodayTotals>
        <div>TOTALS:</div>
        {Object.keys(totals).map(key => {
          if(key == "calories") {return <div key={key}>{key}:{totals[key]}</div>}
          return <div key={key}>{key}:{totals[key]}g</div>
        })}
        <div>Net Carbs: {totals.carbs - totals.fiber}g</div>
      </TodayTotals>
    )
  }

  renderFavorites = () => {
    if(!this.props.auth) {
      return null;
    }
    if(this.props.auth.favorites.length === 0) {
      return <div>No favorites added yet</div>;
    }
    return (
      <div>
        {this.props.auth.favorites.map(item => {
          return <div key={item._id}>{item.name} - {item.servingSize}</div>
        })}
      </div>
    )
  }

  handleMealSubmit = async (e, itemToAdd) => {
    e.preventDefault();
    console.log('in submitNewMeal:', itemToAdd);
    await this.props.submitNewMeal(itemToAdd);
    await this.setState({meals: this.props.todayMeals});
    console.log('this.state.meals hMS:', this.state.meals);
    this.calcDailyTotals();

  }

//////// DEV /////////////////////////////
    logState = () => {
      console.log('dashboard state:', this.state);
      console.log('dashboard props:', this.props);
      console.log('user:', this.props.auth);
    }

    logMeals = () => {
      console.log('meals:', this.state.meals);
      console.log('totals:', this.state.totals);
    }
///////////////////////////////////////////
  render() {
    return (
      <Container>
        <Sidebar>
          <h2>Favorites</h2>
          {this.renderFavorites()}
          <div><button onClick={this.logState}>Log Dashboard State and Props</button></div>
          <div><button onClick={this.logMeals}>Log Today Meals</button></div>
        </Sidebar>
        <Main>
          <AddMeal onMealSubmit={this.handleMealSubmit}/>
          {this.renderTotals()}
          {this.renderMeals()}

        </Main>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {...state};
}

export default connect(mapStateToProps, actions)(Dashboard);
