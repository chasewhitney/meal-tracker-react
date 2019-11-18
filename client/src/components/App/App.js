//// Top render component ////

import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";
import * as actions from "../../actions";
import * as S from "./App.jsx.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
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
          <S.AppContainer className="AppContainer">
            <Header />
            <S.ContentContainer className="ContentContainer">
              <Route exact path="/" component={Landing} />
              <Route exact path="/dashboard" component={Dashboard} />
            </S.ContentContainer>
            <Footer />
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
