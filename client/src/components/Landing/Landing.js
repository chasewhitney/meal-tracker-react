//// Landing page before login ////

import React, { Component } from "react";
import { connect } from "react-redux";

import * as S from "./Landing.jsx.js";

class Landing extends Component {
  render() {
    if (this.props.auth) {
      this.props.history.push("/Dashboard");
    }
    return (
      <S.LandingContainer>
        <h1>WELCOME</h1>
      </S.LandingContainer>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Landing);
