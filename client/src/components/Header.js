import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends Component {
  renderContent() {
    console.log('auth:', this.props.auth);
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href='/auth/google'>Login with Google</a></li>;
      default:
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }

  render(){
    return (

      <nav>
        <div className="nav-wrapper">
        <Link
          to={this.props.auth ? '/surveys' : '/'}
          className="left brand-logo"
        >
          FoodTracker
        </Link>
        <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>

    )
  }

}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(Header);
