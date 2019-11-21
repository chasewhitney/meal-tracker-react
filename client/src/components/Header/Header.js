//// Application header ////

import React, { Component } from "react";
import { connect } from "react-redux";

import * as S from "./Header.jsx.js";

class Header extends Component {
  renderAuthLink() {
    // console.log("Header-auth:", this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Sign in with Google</a>;
      default:
        return <a href="/user/logout">Sign out</a>;
    }
  }

  renderNavLinks() {
    if (this.props.auth) {
      return (
        <React.Fragment>
          <S.NavLinkItem
            className="NavItem"
            to={this.props.auth ? "/dashboard" : "/"}
          >
            Dashboard
          </S.NavLinkItem>
          <S.NavLinkItem
            className="NavItem"
            to={this.props.auth ? "/history" : "/"}
          >
            History
          </S.NavLinkItem>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <S.HeaderContainer className="HeaderContainer">
        <S.Logo to={this.props.auth ? "/dashboard" : "/"}>FoodTracker</S.Logo>
        <S.NavContainer className="NavContainer">
          {this.renderNavLinks()}
          <S.NavItem className="NavItem">{this.renderAuthLink()}</S.NavItem>
        </S.NavContainer>
      </S.HeaderContainer>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Header);
