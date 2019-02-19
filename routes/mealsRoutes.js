//// mongodb meal routes ////
const request = require('request');
const User = require('../models/User');

console.log('meals routes loaded');

module.exports = app => {

  // GET INSTANT DROPDOWN LIST
  app.post('/meals/add', (req, res) => {
    const id = req.user._id;
    const body = req.body;
    User.findById({_id: id})
      .then(user => {
        user.meals.push(req.body);
        user.save().then(user =>{
          res.send(user);
        });
      })
  });



app.get('/*', (req, res) => {
  console.log('404 : ', req.params);
  res.sendStatus(404);
});

}
