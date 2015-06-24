var request = require('request');

module.exports.getWikiExtract = function(req, res){
	request.get('http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles='+req.query.vegName, function(err, response, body){
			// console.log(response);
			console.log(body);

			// res.status(200).json(result)

	})
}