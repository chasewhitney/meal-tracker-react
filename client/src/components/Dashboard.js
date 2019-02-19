//// Landing page after login ////

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../actions';

import AddMeal from './AddMeal';


const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  background-color: yellow;
  flex: 0 1 25%;
`;

const Main = styled.div`
  background-color: green;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
`;

class Dashboard extends Component {
  async componentDidMount(){
    console.log('Dashboard mounted');
    await this.props.fetchMealsToday();
    this.setState({meals: this.props.mealsToday});
  }

  logState = () => {
    console.log('dashboard state:', this.state);
    console.log('dashboard props:', this.props);
  }


  render() {
    return (
      <Container>
        <Sidebar>
          <h2>Quick Picks</h2>
          <button onClick={this.logState}>Log Dashboard State and Props</button>
        </Sidebar>
        <Main>
          <AddMeal />
          <div className="data">
            TODAY'S MEALS
          </div>
        </Main>
      </Container>
    )
  }
}

function mapStateToProps({state}) {
  return {state};
}

export default connect(mapStateToProps, actions)(Dashboard);
