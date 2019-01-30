import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends Component {
  render(){
    return (

      <nav>
        <div class="nav-wrapper">
        <Link
          to={this.props.auth ? '/surveys' : '/'}
          className="left brand-logo"
        >
          FoodTracker
        </Link>
        <ul className="right"></ul>
        </div>
      </nav>

    )
  }

}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(Header);
