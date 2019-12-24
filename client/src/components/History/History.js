//// Landing page after login ////

import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as S from "./History.jsx.js";
import moment from "moment";
import _ from "lodash";
import { TotalsToCalculate } from "../../fields/fields.js";

class History extends Component {
  state = { fullHistory: [] };

  async componentDidMount() {
    this.buildHistory();
  }

  buildHistory = async () => {
    // Get all meal entries from database
    const res = await axios.get("/meals/getAll");
    const { data } = res;

    const sortedHistoryData = data.reduce((t, v) => {
      if (!(t[t.length - 1] && t[t.length - 1].date === v.date)) {
        t.push({ date: v.date, dailyTotals: {} });
      }

      let dayTotals = t[t.length - 1].dailyTotals;

      TotalsToCalculate.forEach(nutrient => {
        if (!dayTotals[nutrient]) dayTotals[nutrient] = 0;
        dayTotals[nutrient] += v[nutrient] * v.servings;
      });

      dayTotals.netCarbs = dayTotals.carbs + dayTotals.fiber;

      return t;
    }, []);

    console.log("Setting fullHistory state:", sortedHistoryData);
    this.setState({ fullHistory: sortedHistoryData });
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
                <span
                  style={{
                    color:
                      dateObject.dailyTotals.netCarbs > 30
                        ? "#b42857"
                        : "#006f46"
                  }}
                >
                  {dateObject.dailyTotals.netCarbs}g
                </span>
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
            <h1>Under Construction</h1>
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
