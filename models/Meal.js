//// User model ////

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
  user: String,
  name: String,
  servingSize: String,
  servings: Number,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  fiber: Number,
  sugar: Number,
  date: Date
})

const Meal = mongoose.model('meals', mealSchema);

module.exports = Meal;
