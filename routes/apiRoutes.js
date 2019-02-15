//// Nutritionix API routes ////

const keys = require('../config/keys');
const request = require('request');

module.exports = app => {

  // GET INSTANT DROPDOWN LIST
  app.get('/api/instant', (req, res) => {
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
        res.send(JSON.parse(body));
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
      res.send(body);
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
      res.send(JSON.parse(body));
    }
  });
});

app.get('/*', (req, res) => {
  console.log('404 : ', req.params);
  res.sendStatus(404);
});

}
