//// Application header ////

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const NavContainer = styled.div`
  padding: 0;
  margin: 0;
  background-color: #28b485;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  color: white;
  margin: 1rem;
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0;
  font-size: 2rem;
  list-style: none;
  padding: 1rem;
  height: 100%;
  display: flex;
  align-items: center;

  a, a:visited, a:active {
    text-decoration: none;
    color: #eee;
  }

  &:hover {
    background-color: #55c57a;
  }

`;


class Header extends Component {
  renderContent() {
    // console.log('auth:', this.props.auth);
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return <NavItem><a href='/auth/google'>Login with Google</a></NavItem>;
      default:
        return <NavItem><a href="/api/logout">Logout</a></NavItem>;
    }
  }

  render(){
    return (
      <NavContainer>
          <Logo to={this.props.auth ? '/dashboard' : '/'}>
            FoodTracker
          </Logo>
        {this.renderContent()}
      </NavContainer>

    )
  }

}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(Header);
