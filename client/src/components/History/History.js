//// Landing page after login ////

//////// TODO - REFACTOR DB OBJECT TO SORTED HISTORY OBJECT LOGIC ////////////
//////// TODO - CODE COMMENTS ////////////////////////////////////////////////

import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as S from "./History.jsx.js";
import moment from "moment";
import { HistoryController } from "../../utils/historyController";

class History extends Component {
  state = { fullHistory: [] };

  async componentDidMount() {
    this.buildHistory();
  }

  buildHistory = async () => {
    // Get all meal entries from database
    const res = await axios.get("/meals/getAll");
    let { data } = res;

    // Create array of objects containing all meal entries sorted by date, with
    // nutrient totals for each day
    // [ { date: "", mealEntries: [], dailyTotals: [] }, ... ]
    let sortedHistoryData = HistoryController.groupByDate(data)
      .objToArray()
      .createDailyTotals().dataOut;

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
                {dateObject.dailyTotals.netCarbs}g
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
