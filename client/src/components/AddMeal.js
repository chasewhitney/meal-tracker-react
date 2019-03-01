//// Landing page after login ////

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import styled from 'styled-components';
import * as actions from '../actions';

import Dropdown from './dropdown/Dropdown';
import NewMealForm from './NewMealForm';






class AddMeal extends Component {
  state = { term : '', focus: false, popup: false, toFetch: {id: '', type: ''} };

  fetchApiAll = _.debounce((term) => { this.props.fetchApiAll(term) }, 300 );

  handleInputChange = ({ target }) => {
    const term = target.value;
    this.setState({ term : term });

    if(term.length >= 3) {
      // console.log(term);
      this.fetchApiAll(term);
    }
  }

  renderDropdown = () => {
    if(this.state.term.length >= 3 && this.props.apiAll) {
      // console.log('rendering dropdown');
      return <Dropdown handleClick={this.handleDropdownClick}/>
    }
  }

  logState = () => {
    this.props.fetchMealsToday();
    console.log(this.state);
    console.log(this.props);
  }

  clearSearch = () => {
    this.setState({term: ''});
  }

  toggleFocus = () => {
    this.setState({ focus: !this.state.focus});

      // setTimeout(function(){
      //   if(!this.state.focus){
      //     console.log('clearing search!');
      //     this.clearSearch();
      //   }
      // }.bind(this), 100);
  }

  renderPopup = () => {
    if(this.state.popup)
    return (
      <Popup onClick={this.handleClickPopup}>
        <NewMealForm closePopup={this.closePopup} addItem={this.state.toFetch} onSubmit={this.props.onMealSubmit}/>
      </Popup>
    );
  }

  handleDropdownClick = (id, type) => {
    this.setState({toFetch: {id, type}, popup: true});
  }

  handleCreateMealClick = () => {
    this.setState({toFetch: {id: '', type:''}, popup: true});
  }

  handleClickPopup = (e) => {
    if(e.currentTarget === e.target) {
      this.closePopup();
    }
  }

  closePopup = () => {
    this.setState({popup: false});
  }

  render() {
    return (
          <Inputs>


          </Inputs>
    )
  }
}

function mapStateToProps(state) {
  return {...state};
}

export default connect(mapStateToProps, actions)(AddMeal);
