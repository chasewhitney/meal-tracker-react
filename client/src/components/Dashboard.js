//// Landing page after login ////

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';

import Favorites from './Favorites';
import DailyTotals from './DailyTotals';
import Dropdown from './dropdown/Dropdown';
import NewMealForm from './NewMealForm';
import AddMealBar from './AddMealBar';
import TodayMeals from './TodayMeals';

const DashboardContainer = styled.div`
  font-size: 1.5rem; //temp
  display: flex;
`;

const Main = styled.div`
  background-color: green;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

class Dashboard extends Component {
  state = { meals: [] };

  async componentDidMount(){
    this.fetchTodayMeals();
  }

  handleMealSubmit = async (meal) => {
    console.log('handleMealSubmit meal:', meal);
    const res = await axios.post('/meals/addMeal', meal);
    this.setState({meals: res.data});
    console.log('meals after submit:', this.state.meals);
  }

  fetchTodayMeals = async () => {
    const res = await axios.get('/meals/getToday');
    this.setState({meals: res.data});
    console.log('fetched meals:', this.state.meals);
  }

  update = (data) => {
    this.setState({meals: data});
  }

//////// DEV /////////////////////////////
  logState = () => {
    console.log('meals:', this.state.meals);
    console.log('auth:', this.props.auth);
  }
///////////////////////////////////////////
  render() {
    if(!this.props.auth) { return null; }
    return (
      <DashboardContainer>
        <Favorites handleMealSubmit={this.handleMealSubmit}/>
        <Main>
          <AddMealBar handleMealSubmit={this.handleMealSubmit}/>
          <DailyTotals meals={this.state.meals}/>
          <TodayMeals meals={this.state.meals} update={this.update}/>
        </Main>
      </DashboardContainer>
    )
  }
}

function mapStateToProps(state) {
  return {...state};
}

export default connect(mapStateToProps)(Dashboard);
