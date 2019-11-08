import React, { Component } from "react";
import * as S from "./AddMealBar.jsx.js";
import axios from "axios";
import _ from "lodash";

import { DaysOfTheWeek } from "../../fields/fields.js";
import Dropdown from "../Dropdown/Dropdown.js";

class AddMealBar extends Component {
  state = { term: "", dropdown: {}, focus: false };

  componentDidUpdate() {
    if (this.state.term.length < 3 && this.state.dropdown.all) {
      this.setState({ dropdown: {} });
    }
  }

  showDate = () => {
    const today = new Date();
    const date = `${DaysOfTheWeek[today.getDay()]} ${today.getMonth() +
      1}/${today.getDate()}/${today.getFullYear()}`;
    return date;
  };

  handleInputChange = ({ target }) => {
    const term = target.value;
    this.setState({ term });

    if (term.length >= 3) {
      // console.log(term);
      this.debounceFetchDropdown(term);
    }
  };

  fetchDropdownList = async term => {
    console.log("fetchDropdownList term:", term);
    const config = { params: { searchQuery: term } };
    const res = await axios.get("/api/instant", config);

    console.log("FD:", res.data);

    this.setState({ dropdown: res.data });
  };

  debounceFetchDropdown = _.debounce(term => {
    this.fetchDropdownList(term);
  }, 300);

  clearSearch = () => {
    console.log("clearing search!");
    this.setState({ term: "", dropdown: {} });
  };

  toggleFocus = () => {
    this.setState({ focus: !this.state.focus });

    setTimeout(
      function() {
        if (!this.state.focus) {
          this.clearSearch();
        }
      }.bind(this),
      100
    );
  };

  watchForClear = e => {
    if (e.keyCode === 27) {
      this.clearSearch();
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
            value={this.state.term}
            onChange={this.handleInputChange}
            autoComplete="off"
          />
          <Dropdown
            content={this.state.dropdown}
            handleDropdownClick={this.props.handleDropdownClick}
          />
        </S.ApiBox>
        <div>or</div>
        <S.AddMealButton onClick={() => this.props.handleDropdownClick()}>
          Add Custom Entry
        </S.AddMealButton>
        <div className="date">{this.showDate()}</div>
      </S.Inputs>
    );
  }
}

export default AddMealBar;
