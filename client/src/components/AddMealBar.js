import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import _ from 'lodash';

import Dropdown from './dropdown/Dropdown';

const Inputs = styled.div`
  padding: 1.5rem;

  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid grey;
`;

const ApiSearch = styled.input`
  width: 100%;
  height: 3rem;
`;

const ApiBox = styled.div`
  position: relative;
  width: 40rem;
  outline: none;

  display: flex;
  flex-direction: column;
`;

const AddMealButton = styled.button`
`;

class AddMealBar extends Component {
  state ={ term: '', dropdown: {}, focus: false};

  componentDidUpdate() {
    if(this.state.term.length < 3 && this.state.dropdown.all) {
      this.setState({dropdown: {}});
    }
  }



  handleInputChange = ({ target }) => {
    const term = target.value;
    this.setState({ term });

    if(term.length >= 3) {
      // console.log(term);
      this.debounceFetchDropdown(term);
    }
  }

  fetchDropdownList = async (term) => {
    console.log('fetchDropdownList term:', term);
    const config = {params: {searchQuery: term}};
    const res = await axios.get('/api/instant', config);

    console.log('FD:', res.data);

    this.setState({dropdown: res.data});
  }

  debounceFetchDropdown = _.debounce((term) => { this.fetchDropdownList(term) }, 300 );

  clearSearch = () => {
    console.log('clearing search!');
    this.setState({term: '', dropdown: {}});
  }

  toggleFocus = () => {
    this.setState({ focus: !this.state.focus});

      setTimeout(function(){
        if(!this.state.focus){
          this.clearSearch();
        }
      }.bind(this), 100);
  }

  watchForClear = (e) => {
    if(e.keyCode === 27) {
      this.clearSearch();
    }
  }

  render() {
    return (
      <Inputs>
        <AddMealButton onClick={() => this.props.handleDropdownClick()}>Add a meal</AddMealButton>
        <ApiBox onKeyDown={this.watchForClear}
          onFocus={this.toggleFocus}
          onBlur={this.toggleFocus}
          tabIndex="0"
          >
          <ApiSearch
            placeholder="Search for info"
            value={this.state.term}
            onChange={this.handleInputChange}
            autoComplete="off"
            />
          <Dropdown
            content={this.state.dropdown}
            handleDropdownClick={this.props.handleDropdownClick}
            />
        </ApiBox>
      </Inputs>
    )
  }
}



export default AddMealBar;
