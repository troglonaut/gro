var xmlParse = require('xml2js').parseString;
var request = require('request');

module.exports.getZoneData = function(req, res){
  request.get('http://www.plantmaps.com/pm_queries.php?Z2Z='+req.query.zipCode, function(err, response, body){
      xmlParse(body, function(err, result){
          res.status(200).json(result);
      });
  });
};