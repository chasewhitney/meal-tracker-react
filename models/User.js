//// User model ////

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
  name: String,
  servingSize: String,
  servings: Number,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  fiber: Number,
  sugar: Number

})

const userSchema = new Schema({
  googleId: String,
  meals: [mealSchema],
  favorites: [mealSchema],
});

const User = mongoose.model('users', userSchema);

module.exports = User;
