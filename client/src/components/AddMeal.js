//// Landing page after login ////

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import _ from 'lodash';
import styled from 'styled-components';
import * as actions from '../actions';

import Dropdown from './dropdown/Dropdown';
import NewMealForm from './NewMealForm';

const Inputs = styled.div`
  background-color: red;
  padding: 1.5rem;

  display: flex;
  justify-content: space-around;
`;

const ApiSearch = styled.input`
  width: 100%;
  height: 3rem;
`;

const AddMealButton = styled.button`
`;

const ApiBox = styled.div`
  position: relative;
  width: 40rem;
  outline: none;

  display: flex;
  flex-direction: column;

`;

const Popup = styled.div`
  position: fixed;
  background-color: rgba(0,0,0,.80);
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

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

  handleCreateMealClick= () => {
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
            {this.renderPopup()}
            <AddMealButton onClick={this.handleCreateMealClick}>Add a meal</AddMealButton>
            <button onClick={this.logState}>Log State</button>
            <ApiBox onFocus={this.toggleFocus} onBlur={this.toggleFocus} tabIndex="0">
              <ApiSearch placeholder="Search for info"
                value={this.state.term}
                onChange={this.handleInputChange}
                autoComplete="off"
                />
              {this.renderDropdown()}

            </ApiBox>
          </Inputs>
    )
  }
}

function mapStateToProps(state) {
  return {...state};
}

export default reduxForm({form: 'mealForm'})(connect(mapStateToProps, actions)(AddMeal));
