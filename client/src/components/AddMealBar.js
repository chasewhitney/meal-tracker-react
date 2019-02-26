import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import _ from 'lodash';

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

  handleDropdownClick = (id, type) => {
    console.log('dropdown clicked:', id, type);

    ///////////  DEV ////////////////
    const foodObj = {};
    foodObj.name = "Wheaties";
    foodObj.servingSize = `1cup`;
    foodObj.servings = 1;
    foodObj.calories = 100;
    foodObj.fat = 5;
    foodObj.carbs = 10;
    foodObj.fiber = 3;
    foodObj.sugar = 2;
    foodObj.protein = 1;
    foodObj.img = "https://d1r9wva3zcpswd.cloudfront.net/576d9e8e7d920b7a1664cb59.jpeg";
    ////////////////////////////////

    // export const fetchApiItem = (id, type) => async dispatch => {
    //   const config = { params: {toQuery :id } };
    //   const res = await axios.get(`/api/${type}`, config);
    //
    //   console.log('res.data:', res.data);
    //   const resData = res.data.foods[0];
    //   console.log('resData:', resData);
    //
    //
    //   const foodObj = {};
    //   foodObj.name = resData.food_name;
    //   foodObj.img = resData.photo.thumb;
    //   foodObj.servingSize = `${resData.serving_qty}${resData.serving_unit}`;
    //   foodObj.servings = 1;
    //   foodObj.calories = parseInt(resData.nf_calories);
    //   foodObj.fat = parseInt(resData.nf_total_fat);
    //   foodObj.carbs = parseInt(resData.nf_total_carbohydrate);
    //   foodObj.fiber = parseInt(resData.nf_dietary_fiber);
    //   foodObj.sugar = parseInt(resData.nf_sugars);
    //   foodObj.protein = parseInt(resData.nf_protein);
    //
    //   console.log('foodObj:', foodObj);
    //   dispatch({type: FETCH_API_ITEM, payload: foodObj});
    // }

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

      // setTimeout(function(){
      //   if(!this.state.focus){
      //     this.clearSearch();
      //   }
      // }.bind(this), 100);
  }


  render() {
    return (
      <Inputs>
        <AddMealButton>Add a meal</AddMealButton>
        <ApiBox onFocus={this.toggleFocus} onBlur={this.toggleFocus} tabIndex="0">
          <ApiSearch
            placeholder="Search for info"
            value={this.state.term}
            onChange={this.handleInputChange}
            autoComplete="off"
            />
          <Dropdown content={this.state.dropdown} handleClick={this.handleDropdownClick}/>
        </ApiBox>
      </Inputs>
    )
  }
}



export default AddMealBar;
