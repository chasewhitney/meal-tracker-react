//// Nutritionix API routes ////

const keys = require('../config/keys');
const request = require('request');

console.log('api routes loaded');

module.exports = app => {

  // GET INSTANT DROPDOWN LIST
  app.get('/api/instant', (req, res) => {
    console.log('instant:', req.params);
    const { searchQuery } = req.query;
    console.log('searchQuery:', searchQuery);

    const options = {
      url: `https://trackapi.nutritionix.com/v2/search/instant?detailed=true&query=${searchQuery}`,
      headers: {
        'x-app-id': keys.nutriId,
        'x-app-key': keys.nutriKey
      }
    };

    request(options, (err, response, body) => {
      if(err) {
        console.log('error:', err);
        res.sendStatus(500);
      } else {
        const data = JSON.parse(body);
        for (let arr in data) {
            if (data.hasOwnProperty(arr)) {
              data[arr].splice(10,10);
            }
        }
        data.all = { branded: data.branded.slice(0,5), common: data.common.slice(0,5)};
        res.send(data);
      }
    });
  });

  // GET SELECTED COMMON ITEM
  app.get('/api/common', (req, res) => {
    console.log('req.body:', req.body);

    const {toQuery} = req.query;
    const options = {
      url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
      method: 'POST',
      headers: {
        'x-app-id': keys.nutriId,
        'x-app-key': keys.nutriKey
      },
      body: {
        "query" : toQuery
      },
      json: true

    };

    request(options, (err, response, body) => {
      if(err) {
        console.log('error:', err);
        res.sendStatus(500);
      } else {
        console.log('api/common received body:', body);
          const foodObj = {};
          const resData = body.foods[0];

          foodObj.name = resData.food_name;
          foodObj.img = resData.photo.thumb;
          foodObj.servingSize = `${resData.serving_qty}${resData.serving_unit}`;
          foodObj.servings = 1;
          foodObj.calories = parseInt(resData.nf_calories);
          foodObj.fat = parseInt(resData.nf_total_fat);
          foodObj.carbs = parseInt(resData.nf_total_carbohydrate);
          foodObj.fiber = parseInt(resData.nf_dietary_fiber);
          foodObj.sugar = parseInt(resData.nf_sugars);
          foodObj.protein = parseInt(resData.nf_protein);
        res.send(foodObj);
      }
    });
  });

  // GET SELECTED BRANDED ITEM
  app.get('/api/branded', (req, res) => {
    console.log('req.query:', req.query);

    const { toQuery } = req.query;
    const options = {
      url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${toQuery}`,
      headers: {
        'x-app-id': keys.nutriId,
        'x-app-key': keys.nutriKey
      }
    };

    request(options, (err, response, body) => {
      if(err) {
        console.log('error:', err);
        res.sendStatus(500);
      } else {
        body = JSON.parse(body);
        const foodObj = {};
        const resData = body.foods[0];
        foodObj.name = resData.food_name;
        foodObj.img = resData.photo.thumb;
        foodObj.servingSize = `${resData.serving_qty}${resData.serving_unit}`;
        foodObj.servings = 1;
        foodObj.calories = parseInt(resData.nf_calories);
        foodObj.fat = parseInt(resData.nf_total_fat);
        foodObj.carbs = parseInt(resData.nf_total_carbohydrate);
        foodObj.fiber = parseInt(resData.nf_dietary_fiber);
        foodObj.sugar = parseInt(resData.nf_sugars);
        foodObj.protein = parseInt(resData.nf_protein);
        console.log('GET api/branded responding with:', foodObj);
        res.send(foodObj);
      }
    });
  });
}
