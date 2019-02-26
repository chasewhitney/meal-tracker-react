//// Top render component ////

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';
import styled from 'styled-components';
import { ModalProvider } from 'styled-react-modal';

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
        <ModalProvider>
          <AppContainer>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
          </AppContainer>
        </ModalProvider>
      </ BrowserRouter>
    )
  }
}

export default connect(null, actions)(App);
