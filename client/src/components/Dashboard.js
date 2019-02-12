//// Landing page after login ////

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import styled from 'styled-components';
import * as actions from '../actions';

import Dropdown from './dropdown/Dropdown';

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  background-color: yellow;
  flex: 0 1 25%;
`;

const Main = styled.div`
  background-color: green;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
`;

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

const AddMeal = styled.button`
`;

const ApiBox = styled.div`
  width: 40rem;
  position: relative;
`;

const DropdownContainer = styled.div`
  position: absolute;
  display: block;
  top: 3rem;
  left: 0;
  width: 100%;
`;

class Dashboard extends Component {
  state = { term : '', focus: false };

  fetchApiAll = _.debounce((term) => { this.props.fetchApiAll(term) }, 300 );

  handleInputChange = ({ target }) => {
    const term = target.value;
    this.setState({ term : term });

    if(term.length >= 3) {
      console.log(term);
      this.fetchApiAll(term);
    }
  }

  renderDropdown = () => {
    if(this.state.term.length >= 3 && this.props.apiAll) {
      console.log('rendering dropdown');
      return <Dropdown />
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

  render() {
    return (
      <Container>
        <Sidebar>
          <h2>Quick Picks</h2>
        </Sidebar>
        <Main>
          <Inputs>
            <AddMeal>Add a meal</AddMeal>
            <button onClick={this.logState}>Log State</button>
            <ApiBox onFocus={this.toggleFocus} onBlur={this.toggleFocus} tabIndex="0">
              <ApiSearch placeholder="Search for info"
                value={this.state.term}
                onChange={this.handleInputChange}
                autoComplete="off"
                />
              <DropdownContainer>{this.renderDropdown()}</DropdownContainer>
            </ApiBox>
          </Inputs>
          <div className="data">
            TODAY'S MEALS
          </div>

        </Main>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {...state};
}

export default connect(mapStateToProps, actions)(Dashboard);
