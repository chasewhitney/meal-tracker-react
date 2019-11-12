import React, { Component } from "react";
import * as S from "./AddMealBar.jsx.js";
import axios from "axios";
import _ from "lodash";

import { DaysOfTheWeek } from "../../fields/fields.js";
import Dropdown from "../Dropdown/Dropdown.js";

class AddMealBar extends Component {
  state = { searchTerm: "", dropdownData: {}, dropdownIsFocused: false };

  componentDidUpdate() {
    if (this.state.searchTerm.length < 3 && this.state.dropdownData.all) {
      this.setState({ dropdownData: {} });
    }
  }

  showDate = () => {
    const today = new Date();
    const date = `${DaysOfTheWeek[today.getDay()]} ${today.getMonth() +
      1}/${today.getDate()}/${today.getFullYear()}`;
    return date;
  };

  // Handle searchbar input change
  handleInputChange = ({ target }) => {
    const searchTerm = target.value;
    this.setState({ searchTerm });

    if (searchTerm.length >= 3) {
      // console.log(searchTerm);
      this.debounceFetchDropdown(searchTerm);
    }
  };

  // Submit query to Nutritionix API and receive dropdown data
  fetchDropdownList = async searchTerm => {
    console.log("fetchDropdownList searchTerm:", searchTerm);
    const config = { params: { searchQuery: searchTerm } };
    const res = await axios.get("/api/instant", config);

    console.log("fetchDropdownList setting state.dropdownData", res.data);
    this.setState({ dropdownData: res.data });
  };

  // Wait 300ms for user to stop entering text into search input before querying API
  debounceFetchDropdown = _.debounce(searchTerm => {
    this.fetchDropdownList(searchTerm);
  }, 300);

  clearSearchInput = () => {
    console.log("clearing search!");
    this.setState({ searchTerm: "", dropdownData: {} });
  };

  // Clear searchbar input and hidedropdown if dropdown loses focus
  toggleFocus = () => {
    this.setState({ dropdownIsFocused: !this.state.dropdownIsFocused });
    setTimeout(
      function() {
        if (!this.state.dropdownIsFocused) {
          this.clearSearchInput();
        }
      }.bind(this),
      100
    );
  };

  // Clear searchbar input and hide dropdown if user presses ESC key
  watchForClear = e => {
    if (e.keyCode === 27) {
      this.clearSearchInput();
    }
  };

  render() {
    return (
      <S.Inputs>
        <S.ApiBox
          onKeyDown={this.watchForClear}
          onFocus={this.toggleFocus}
          onBlur={this.toggleFocus}
          tabIndex="0"
        >
          <S.ApiSearch
            placeholder="Add Entry From Food Database"
            value={this.state.searchTerm}
            onChange={this.handleInputChange}
            autoComplete="off"
          />
          <Dropdown
            content={this.state.dropdownData}
            handleAddMealClick={this.props.handleAddMealClick}
          />
        </S.ApiBox>
        <div>or</div>
        <S.AddMealButton onClick={() => this.props.handleAddMealClick()}>
          Add Custom Entry
        </S.AddMealButton>
        <div className="date">{this.showDate()}</div>
      </S.Inputs>
    );
  }
}

export default AddMealBar;
