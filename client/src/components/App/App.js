//// Top render component ////

import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import * as actions from "../../actions";
import styled from "styled-components";
import { ModalProvider } from "styled-react-modal";

import Header from "../Header/Header.js";
import Landing from "../Landing/Landing.js";
import Dashboard from "../Dashboard/Dashboard.js";

const AppContainer = styled.div`
  background-color: #f8f8f8;
`;

const Footer = styled.div`
  width: 100%;
  background-color: grey;
  height: 100px;
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <ModalProvider>
          <AppContainer>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
          </AppContainer>
        </ModalProvider>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
