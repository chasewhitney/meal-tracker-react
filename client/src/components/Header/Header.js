//// Application header ////

import React, { Component } from "react";
import { connect } from "react-redux";

import * as S from "./Header.jsx.js";

class Header extends Component {
  renderContent() {
    console.log("auth:", this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <S.NavItem>
            <a href="/auth/google">Login with Google</a>
          </S.NavItem>
        );
      default:
        return (
          <S.NavItem>
            <a href="/api/logout">Logout</a>
          </S.NavItem>
        );
    }
  }

  render() {
    return (
      <S.NavContainer>
        <S.Logo to={this.props.auth ? "/dashboard" : "/"}>FoodTracker</S.Logo>
        {this.renderContent()}
      </S.NavContainer>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Header);
