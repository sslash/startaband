module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', function(req,res){
		res.render ('home');
	});

};
