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

  componentDidUpdate(){
    console.log('props:', this.props);
    console.log('state:', this.state);
    console.log('user:', this.props.auth);
    console.log('meals:', this.state.meals);
  }

  handleMealSubmit = async (e, meal) => {
    console.log('handleMealSubmit meal:', meal);
    const res = await axios.post('/meals/addMeal', meal);
    this.setState({meals: res.data});
  }

  fetchTodayMeals = async () => {
    const res = await axios.get('/meals/getToday');
    this.setState({meals: res.data});
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
          <TodayMeals meals={this.state.meals}/>
        </Main>
      </DashboardContainer>
    )
  }
}

function mapStateToProps(state) {
  return {...state};
}

export default connect(mapStateToProps)(Dashboard);
