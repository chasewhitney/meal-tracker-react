//// Landing page after login ////

//////// TODO - REFACTOR DB OBJECT TO SORTED HISTORY OBJECT LOGIC ////////////
//////// TODO - CODE COMMENTS ////////////////////////////////////////////////

import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as S from "./History.jsx.js";
import moment from "moment";
import { TotalsToCalculate } from "../../fields/fields.js";

class History extends Component {
  state = { fullHistory: [] };

  async componentDidMount() {
    this.fetchAllMeals();
  }

  // Get meals from the database that were entered today
  fetchAllMeals = async () => {
    const res = await axios.get("/meals/getAll");
    let { data } = res;
    let sortedHistory = [];

    // sortedHistory becomes an array of objects:
    // {
    //   date: date of entry,
    //   entries: meals entered that day,
    //   totals: nutrient totals for that day
    // }

    data.forEach((v, i) => this.sortByDate(v, sortedHistory));

    console.log("sortedHistory ===", sortedHistory);
    console.log("TotalsToCalculate ===", TotalsToCalculate);

    sortedHistory.forEach((v, i) => this.calculateDailyTotals(v));

    console.log("sortedHistory with totals:", sortedHistory);

    this.setState({ fullHistory: sortedHistory });
  };

  // Sorts history by date
  sortByDate = (v, sortedHistory) => {
    let index = this.findWithProp(sortedHistory, "date", v.date); //array, property, value
    if (index === -1) {
      sortedHistory.push({ date: v.date, entries: [v] });
    } else {
      sortedHistory[index].entries.push(v);
    }
  };

  // Returns index where array[index][property] = value, or -1;
  findWithProp = (array, property, value) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i][property] === value) {
        return i;
      }
    }
    return -1;
  };

  calculateDailyTotals = dateObject => {
    dateObject.totals = {};
    dateObject.entries.sum = function(prop) {
      var total = 0;
      for (var i = 0; i < this.length; i++) {
        total += this[i][prop];
      }
      return total;
    };
    TotalsToCalculate.forEach((v, i) => {
      dateObject.totals[v] = dateObject.entries.sum(v);
    });
    dateObject.totals.netCarbs =
      dateObject.totals.carbs - dateObject.totals.fiber;
  };

  renderHistory = () => {
    if (this.state.fullHistory.length < 1) {
      return <div>No history yet.</div>;
    } else {
      return (
        <div>
          {this.state.fullHistory.map(dateObject => {
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

  sayHi = () => {
    console.log("HELLO!!!!!!!!!!!!!!!!!!!!!!");
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
