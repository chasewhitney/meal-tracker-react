//// Landing page after login ////

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Dropdown from './Dropdown';

class Dashboard extends Component {
  state = { term : '' };

  onInputChange = ({ target }) => {
    const term = target.value;
    this.setState({ term : term });

    if(term.length >= 3) {
      console.log(term);
      this.props.fetchApiAll(term);
    }
  }

    // Branded dropdown
    // ID: nix_item_id
    // food_name
    // photo.thumb
    // brand_name
    // serving_qty
    // serving_unit
    // nf_calories

    // Common dropdown
    // ID: food_name
    // food_name
    // photo.thumb
  // }

  logState = () => {
    console.log(this.state);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <button onClick={this.logState}>Log State</button>
        Dashboard
        <input placeholder="Search for info"
          value={this.state.term}
          onChange={this.onInputChange}
          style={{"backgroundColor": "grey"}}
          />
        Term: {this.state.term}
        <Dropdown />

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {...state};
}

export default connect(mapStateToProps, actions)(Dashboard);
