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
  state = { todayMeals: [], popupIsOpen: false, mealToAdd: {}, editing: false };

  async componentDidMount() {
    this.fetchTodayMeals();
  }

  // Toggles component state for add/edit modal
  toggleModal = e => {
    this.setState(prevState => ({ popupIsOpen: !prevState.popupIsOpen }));
  };

  // Sends new or edited meal to server
  // Receives updated list of today's meals
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
    this.setState({ todayMeals: res.data, popupIsOpen: false });
    console.log("meals after submit:", this.state.todayMeals);
  };

  // Get meals from the database that were entered today
  fetchTodayMeals = async () => {
    const res = await axios.get("/meals/getToday");
    this.setState({ todayMeals: res.data });
    console.log("fetched meals:", this.state.todayMeals);
  };

  // Add Custom Entry button or API dropdown item was clicked
  handleAddMealClick = async (id, type) => {
    if (!id) {
      // Add Custom Entry button clicked, meal-submitting modal will be
      // unpopulated
      console.log("AddMealButton clicked with id,type:", id, type);
      this.setState({ mealToAdd: {} });
    } else {
      // Item selected from API dropdown menu, meal-submitting modal will be
      // populated with API item's data
      console.log("Dropdown item clicked with id,type:", id, type);
      const config = { params: { toQuery: id } };
      const res = await axios.get(`/api/${type}`, config);

      console.log("mealToAdd from Nutritionix API:", res.data);
      this.setState({ mealToAdd: res.data });
    }
    this.toggleModal();
  };

  // Meal edit button clicked, meal-submitting modal will be populated with
  // meal's data.
  handleEditMealClick = meal => {
    console.log("editing meal:", meal);
    meal.editing = true;
    this.setState({ mealToAdd: meal });
    this.toggleModal();
  };

  // Delete meal entry from database
  handleDeleteMealClick = async id => {
    console.log("deleting meal:", id);
    const res = await axios.delete(`/meals/deleteMeal/${id}`);
    this.setState({ todayMeals: res.data });
  };

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
              handleAddMealClick={this.handleAddMealClick}
              handleMealSubmit={this.handleMealSubmit}
            />
            <DailyTotals meals={this.state.todayMeals} />
            <TodayMeals
              todayMeals={this.state.todayMeals}
              onDelete={this.handleDeleteMealClick}
              onEdit={this.handleEditMealClick}
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

//////// DEV /////////////////////////////

// handleAddMealClick = async (id, type) => {
//   console.log("dropdown clicked:", id, type);
//   const foodObj = {};
//   foodObj.name = "Wheaties";
//   foodObj.servingSize = `1cup`;
//   foodObj.servings = 1;
//   foodObj.calories = 100;
//   foodObj.fat = 5;
//   foodObj.carbs = 10;
//   foodObj.fiber = 3;
//   foodObj.sugar = 2;
//   foodObj.protein = 1;
//   foodObj.img = "https://d1r9wva3zcpswd.cloudfront.net/576d9e8e7d920b7a1664cb59.jpeg";
//   console.log('mealToAdd:', foodObj);
//   this.setState({mealToAdd: foodObj});
//   this.toggleModal();
// };

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
