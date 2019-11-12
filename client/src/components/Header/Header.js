//// Application header ////

import React, { Component } from "react";
import { connect } from "react-redux";

import * as S from "./Header.jsx.js";

class Header extends Component {
  renderNavLink() {
    console.log("Header-auth:", this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Login with Google</a>;
      default:
        return <a href="/api/logout">Logout</a>;
    }
  }

  render() {
    return (
      <S.NavContainer>
        <S.Logo to={this.props.auth ? "/dashboard" : "/"}>FoodTracker</S.Logo>
        <S.NavItem>{this.renderNavLink()}</S.NavItem>
      </S.NavContainer>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Header);
