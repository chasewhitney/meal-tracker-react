//// Landing page after login ////

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Dropdown from './Dropdown';

class Dashboard extends Component {
  state = { term : '', focus: false };

  handleInputChange = ({ target }) => {
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

  renderDropdown = () => {
    if(this.state.term.length >= 3) {
      return <Dropdown />
    }
  }

  logState = () => {
    console.log(this.state);
    // console.log(this.props);
  }

  clearSearch = () => {
    this.setState({term: ''});
  }

  toggleFocus = () => {
    this.setState({ focus: !this.state.focus});

      setTimeout(function(){
        if(!this.state.focus){
          console.log('clearing search!');
          this.clearSearch();
        }
      }.bind(this), 100);
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.logState}>Log State</button>
        </div>
        <div>Dashboard</div>
        <div onFocus={this.toggleFocus} onBlur={this.toggleFocus} tabIndex="0">
          <input placeholder="Search for info"
            value={this.state.term}
            onChange={this.handleInputChange}
            autoComplete="off"
            />
          {this.renderDropdown()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {...state};
}

export default connect(mapStateToProps, actions)(Dashboard);
