//// Top render component ////

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';
import styled from 'styled-components';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';

const AppContainer = styled.div`

`;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render(){
    return(
      <BrowserRouter>
        <AppContainer>
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/dashboard' component={Dashboard} />
        </AppContainer>
      </ BrowserRouter>
    )
  }
}

export default connect(null, actions)(App);
