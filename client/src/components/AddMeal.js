//// Landing page after login ////

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import styled from 'styled-components';
import * as actions from '../actions';

import Dropdown from './dropdown/Dropdown';

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

const DropdownContainer = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
`;

const Popup = styled.div`
  position: fixed;
  background-color: orange;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 9999;

  & div {
    position: absolute;
    height: 75%;
    width: 75%;
    left: 50%;
    top: 50%;
    background-color: green;
    transform: translate(-50%, -50%);
  }

`;

class AddMeal extends Component {
  state = { term : '', focus: false, popup: false };

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

  handleClickPopup = (e) => {
    if(e.currentTarget === e.target) {
      this.setState({popup: false});
    }
  }

  renderPopup = () => {
    if(this.state.popup)
    return (
      <Popup onClick={this.handleClickPopup}>
        <div>IM CONTENT</div>
      </Popup>
    );
  }

  handleDropdownClick = (id, type) => {
    // console.log('clicked:', type, id);
    this.props.fetchApiItem(id, type);
    this.togglePopup();
  }

  togglePopup = () => {
    this.setState(prevState => ({popup: !prevState.popup}));
  }

  render() {
    return (
          <Inputs>
            <AddMealButton onClick={this.togglePopup}>Add a meal</AddMealButton>
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

export default connect(mapStateToProps, actions)(AddMeal);
