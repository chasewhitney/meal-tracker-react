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

  render() {
    return (
      <Container>
        <Sidebar>
          <h2>Quick Picks</h2>
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

function mapStateToProps(state) {
  return {...state};
}

export default connect(mapStateToProps, actions)(Dashboard);
