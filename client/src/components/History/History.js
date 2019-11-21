//// Landing page after login ////

//////// TODO - REFACTOR! //////////////////////////////////////////////

import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as S from "./History.jsx.js";
import moment from "moment";

class History extends Component {
  state = { AllMeals: [] };

  fullHistory = [];

  async componentDidMount() {
    this.fetchAllMeals();
  }

  // Get meals from the database that were entered today
  fetchAllMeals = async () => {
    const res = await axios.get("/meals/getAll");
    var { data } = res;
    console.log("fetchAllMeals got:", data);
    // this.setState({ AllMeals: res.data });
    // console.log("fetched meals:", this.state.AllMeals);

    data.forEach((v, i) => this.sortByDate(v)); // Turn history into an object where key is the date and the value is an array of entries pertaining to that date

    console.log("fullHistory after sortByDate:", this.fullHistory);

    var totalsToCalc = [
      "fat",
      "carbs",
      "fiber",
      "calories",
      "protein",
      "sugar"
    ];

    this.fullHistory.forEach((v, i) => this.calcTotals(v, totalsToCalc));
    console.log("fullHistory is:", this.fullHistory);
  };

  // Sorts history by date
  sortByDate = v => {
    var index = this.findWithProp(this.fullHistory, "date", v.date); //array, property, value
    if (index == -1) {
      this.fullHistory.push({ date: v.date, entries: [v] });
    } else {
      this.fullHistory[index].entries.push(v);
    }
  };

  // Returns index where array[index][property] = value, or -1;
  findWithProp = (array, property, value) => {
    for (var i = 0; i < array.length; i++) {
      if (array[i][property] === value) {
        return i;
      }
    }
    return -1;
  };

  // Calculate daily totals
  calcTotals = (day, nute) => {
    console.log("in calcTotals with:", day);
    console.log("nutes:", nute);
    console.log("day.entries:", day.entries);
    day.totals = {};
    var dt = day.totals;
    day.entries.sum = function(prop) {
      var total = 0;
      for (let i = 0; i < this.length; i++) {
        total += this[i][prop];
      }
      return total;
    };
    nute.forEach((v, i) => {
      dt[v] = day.entries.sum(v);
    });
    dt.netCarbs = dt.carbs - dt.fiber;
  };

  renderHistory = () => {
    if (this.fullHistory.length < 1) {
      return <div>No history yet.</div>;
    } else {
      return (
        <div>
          {this.fullHistory.map(dateObject => {
            return (
              <div key={dateObject.date}>
                {moment(dateObject.date).format("MM/DD/YYYY")}:{" "}
                {dateObject.totals.netCarbs}g
              </div>
            );
          })}
        </div>
      );
    }
  };

  render() {
    if (!this.props.auth) {
      return null;
    }
    return (
      <S.HistoryContainer className="DashboardContainer">
        <S.HistoryContent className="DashboardContent">
          <S.Sidebar>
            <h1>Net Carb History</h1>
            {this.renderHistory()}
          </S.Sidebar>
          <S.Main className="Main">
            <h1 style={{ margin: "auto" }}> Under Construction </h1>
          </S.Main>
        </S.HistoryContent>
      </S.HistoryContainer>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(History);
