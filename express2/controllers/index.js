var food = require('../models/food.js');

var indexController = { //this is where you read info from the request, and look up data in the DB, feed it into the template
	index: function(req, res) {
		res.render('index', {foodieFoods : food.allFoods});
	},

	foodPage : function(req, res){
		var foodSlug = req.params.slug;
		var foundFood = food.foodFind(foodSlug);
		res.render('food', {food : foundFood});//reference jade view
	}
};

module.exports = indexController;