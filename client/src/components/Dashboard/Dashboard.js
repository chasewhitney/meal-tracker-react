//// Landing page after login ////

import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as S from "./Dashboard.jsx.js";

import Sidebar from "../Sidebar/Sidebar.js";
import DailyTotals from "../DailyTotals/DailyTotals.js";
import AddMealBar from "../AddMealBar/AddMealBar.js";
import TodayMeals from "../TodayMeals/TodayMeals.js";
import AddMealForm from "../AddMealForm/AddMealForm.js";

class Dashboard extends Component {
  state = { meals: [], popupIsOpen: false, mealToAdd: {}, editing: false };

  async componentDidMount() {
    this.fetchTodayMeals();
  }

  toggleModal = e => {
    this.setState(prevState => ({ popupIsOpen: !prevState.popupIsOpen }));
  };

  handleMealSubmit = async item => {
    console.log("hMS item:", item);
    let res = {};

    if (item.editing) {
      console.log("handleMealSubmit updating:", item);
      res = await axios.put("/meals/updateMeal", item);
    } else {
      console.log("handleMealSubmit submitting new:", item);
      res = await axios.post("/meals/addMeal", item);
    }
    this.setState({ meals: res.data, popupIsOpen: false });
    console.log("meals after submit:", this.state.meals);
  };

  fetchTodayMeals = async () => {
    const res = await axios.get("/meals/getToday");
    this.setState({ meals: res.data });
    console.log("fetched meals:", this.state.meals);
  };

  update = data => {
    this.setState({ meals: data });
  };

  handleDropdownClick = async (id, type) => {
    console.log("dropdown clicked:", id, type);

    ///////////  DEV ////////////////
    // const foodObj = {};
    // foodObj.name = "Wheaties";
    // foodObj.servingSize = `1cup`;
    // foodObj.servings = 1;
    // foodObj.calories = 100;
    // foodObj.fat = 5;
    // foodObj.carbs = 10;
    // foodObj.fiber = 3;
    // foodObj.sugar = 2;
    // foodObj.protein = 1;
    // foodObj.img = "https://d1r9wva3zcpswd.cloudfront.net/576d9e8e7d920b7a1664cb59.jpeg";
    // console.log('mealToAdd:', foodObj);
    // this.setState({mealToAdd: foodObj});
    // this.toggleModal();

    ////////// END DEV //////////////////////

    if (!id) {
      console.log("clicked AddMealButton");
      this.setState({ mealToAdd: {} });
    } else {
      console.log("clicked Dropdown");
      const config = { params: { toQuery: id } };
      const res = await axios.get(`/api/${type}`, config);

      console.log("mealToAdd:", res.data);
      this.setState({ mealToAdd: res.data });
    }
    this.toggleModal();
  };

  handleEditClick = meal => {
    console.log("editing meal:", meal);
    meal.editing = true;
    this.setState({ mealToAdd: meal });
    this.toggleModal();
  };

  //////// DEV /////////////////////////////
  // logState = () => {
  //   console.log("meals:", this.state.meals);
  //   console.log("auth:", this.props.auth);
  // };
  //
  // onFormSubmit = () => {
  //   console.log("form was submitted");
  //   console.log("SUBMIT:", this.props.form.addMealForm.values);
  //   this.toggleModal();
  // };
  //////////// END DEV ////////////////////

  render() {
    if (!this.props.auth) {
      return null;
    }
    return (
      <S.DashboardContainer>
        <S.DashboardContent>
          <Sidebar handleMealSubmit={this.handleMealSubmit} />
          <S.Main>
            <S.Popup
              isOpen={this.state.popupIsOpen}
              onBackgroundClick={this.toggleModal}
              onEscapeKeydown={this.toggleModal}
            >
              <AddMealForm
                mealToAdd={this.state.mealToAdd}
                onFormSubmit={this.handleMealSubmit}
                onCancel={this.toggleModal}
              />
            </S.Popup>
            <AddMealBar
              handleDropdownClick={this.handleDropdownClick}
              handleMealSubmit={this.handleMealSubmit}
            />
            <DailyTotals meals={this.state.meals} />
            <TodayMeals
              meals={this.state.meals}
              update={this.update}
              onEdit={this.handleEditClick}
            />
          </S.Main>
        </S.DashboardContent>
      </S.DashboardContainer>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Dashboard);
