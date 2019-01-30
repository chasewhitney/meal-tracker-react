import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/dashboard' component={Dashboard} />
        </div>
      </ BrowserRouter>
    )
  }
}

export default connect(null, actions)(App);
