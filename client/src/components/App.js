import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';

import Landing from './Landing';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div className="container">
          <Route exact path='/' component={Landing} />
        </div>
      </ BrowserRouter>
    )
  }
}

export default connect(null, actions)(App);
