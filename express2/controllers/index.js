var indexController = { //this is where you read info from the request, and look up data in the DB, feed it into the template
	index: function(req, res) {
		res.render('index');
	}
};

module.exports = indexController;