//// Top render component ////

import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import * as actions from "../../actions";
import * as S from "./App.jsx.js";
import { ModalProvider } from "styled-react-modal";

import Header from "../Header/Header.js";
import Landing from "../Landing/Landing.js";
import Dashboard from "../Dashboard/Dashboard.js";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <ModalProvider>
          <S.AppContainer>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <S.Footer />
          </S.AppContainer>
        </ModalProvider>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
