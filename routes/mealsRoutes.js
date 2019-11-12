//// mongodb meal routes ////
const request = require('request');
const User = require('../models/User');
const Meal = require('../models/Meal');
const Favorite = require('../models/Favorite');

console.log('meals routes loaded');

module.exports = app => {

  // GET TODAY'S MEALS
  app.get('/meals/getToday', (req, res) => {
    const user = req.user._id;
    const today = new Date();
    const date = new Date(today.getFullYear(), (today.getMonth()), today.getDate());
    Meal.find({$and:[{date}, {user}] }).
      then(meals => {
        res.send(meals);
      })
  });

  // Add new meal to db
  app.post('/meals/addMeal', (req, res) => {
    const user = req.user._id;
    const today = new Date();
    const date = new Date(today.getFullYear(), (today.getMonth()), today.getDate());
    // const mealToAdd = {...req.body, user, date};
    const mealToAdd = req.body;
    mealToAdd.user = user;
    mealToAdd.date = date;
    mealToAdd.img = mealToAdd.img ? mealToAdd.img : "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png";
    if(mealToAdd._id) {delete mealToAdd._id}
    const meal = new Meal(mealToAdd);
    console.log('post.meals/add saving:', meal);

    meal.save().then(()=>{
      Meal.find({$and:[{date}, {user}] }).
        then(meals => {
          res.send(meals);
        })
    })
  });

  app.put('/meals/updateMeal', (req, res) => {
    ///////// validate
    const user = req.user._id;
    const today = new Date();
    const date = new Date(today.getFullYear(), (today.getMonth()), today.getDate());
    const meal = req.body;
    console.log('updateMeal received:', meal);
    Meal.findByIdAndUpdate(meal._id, meal)
    .then(() => {
      Meal.find({$and:[{date}, {user}] }).
        then(meals => {
          res.send(meals);
        })
    })

  });

  // Add meal to user's favorites
  app.post('/meals/addFavorite', (req,res) => {
    const { _id } = req.user;
    const fav = req.body;
    fav.user = _id;
    if(fav._id) {delete fav._id};
    console.log('adding fav:', fav)

    User.findById({_id}).populate('favorites').then(user => {
    console.log('addFavorite with user:', user);
      const favorite = new Favorite(fav);
      user.favorites.push(favorite);
      Promise.all([user.save(), favorite.save()]).then(results =>{
        res.send(results[0]);
      })

    })
  })

 // Delete a meal from the db
  app.delete('/meals/deleteMeal/:_id', (req, res) => {
    const user = req.user._id;
    const { _id } = req.params;
    const today = new Date();
    const date = new Date(today.getFullYear(), (today.getMonth()), today.getDate());
    console.log('deleting meal:', req.body);

      Meal.deleteOne({_id}).
        then(() => {
          Meal.find({$and:[{date}, {user}] }).
            then(meals => {
              res.send(meals);
            });
        });
  });

  app.delete('/meals/deleteMealFromFavorites/:_id', (req, res) => {
    const { _id } = req.params;
    const userId = req.user._id;

    Favorite.findByIdAndDelete({_id})
      .then(() => {
        return User.findByIdAndUpdate({ _id: userId }, { $pull: { favorites: _id } }).populate('favorites');
      })
      .then(user => {
        console.log('deleteMealFromFavorites returning user:', user);
        res.send(user);
      })
  });






}
