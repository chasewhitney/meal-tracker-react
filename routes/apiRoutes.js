const keys = require('../config/keys');
const request = require('request');

module.exports = app => {

  app.get('/api/instant', function(req, res){
    console.log('req.query.searchQuery:', req.query.searchQuery);
    const toQuery = req.query.searchQuery;
    const options = {
      url: 'https://trackapi.nutritionix.com/v2/search/instant?query=' + toQuery,
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

}
