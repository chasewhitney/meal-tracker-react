//// Favorite model ////

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
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
  img: String,
})

const Favorite = mongoose.model('favorites', favoriteSchema);

module.exports = Favorite;
