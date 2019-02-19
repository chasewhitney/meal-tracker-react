//// mongodb meal routes ////
const request = require('request');
const User = require('../models/User');
const Meal = require('../models/Meal');

console.log('meals routes loaded');

module.exports = app => {

  // GET TODAY'S MEALS
  app.get('/meals/today', (req, res) => {
    const user = req.user._id;
    const today = new Date();
    const date = new Date(today.getFullYear(), (today.getMonth()), today.getDate());
    Meal.find({$and:[{date}, {user}] }).
      then(meals => {
        res.send(meals);
      })
  });
  // SAVE NEW MEAL
  app.post('/meals/add', (req, res) => {

    const user = req.user._id;
    const today = new Date();
    const date = new Date(today.getFullYear(), (today.getMonth()), today.getDate());

    const mealToAdd = {...req.body, user, date};
    const meal = new Meal(mealToAdd)

    meal.save().then(()=>{
      Meal.find({$and:[{date}, {user}] }).
        then(meals => {
          res.send(meals);
        })
    })
  });



}
