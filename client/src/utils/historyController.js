import _ from "lodash";
import { TotalsToCalculate } from "../fields/fields.js";

export const HistoryController = {
  dataIn: [],
  dataOut: [],

  // Create an object where key/value pairs are "<DATE>" : [<MEAL ENTRIES>..]
  groupByDate(data) {
    this.dataIn = _.groupBy(data, x => x.date);
    console.log("dataIN:", this.dataIn);

    return this;
  },

  // Turn history object into array of objects
  // [{
  //  date: "<DATE>",
  //  mealEntries:  [<MEAL ENTRIES>..],
  //  dailyTotals:  {},
  // }, ...]
  objToArray() {
    _.forIn(this.dataIn, (valueEntries, keyDate) => {
      this.dataOut.push({
        date: keyDate,
        mealEntries: valueEntries,
        dailyTotals: {}
      });
    });

    return this;
  },

  // Populate dailyTotals property of each date object in history array
  createDailyTotals() {
    _.forEach(this.dataOut, dateEntry => {
      _.forEach(TotalsToCalculate, nutrient => {
        dateEntry.dailyTotals[nutrient] = this.sumNutrient(
          dateEntry.mealEntries,
          nutrient
        );
      });
      dateEntry.dailyTotals.netCarbs =
        dateEntry.dailyTotals.carbs - dateEntry.dailyTotals.fiber;
    });

    return this;
  },

  sumNutrient(entries, nutrient) {
    let total = 0;

    _.forEach(entries, entry => {
      total += entry[nutrient];
    });

    return total;
  }
};
