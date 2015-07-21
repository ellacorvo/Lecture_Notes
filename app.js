var express = require('express');

var app = express();

//app.set sets configuration settings
app.set('view engine', 'jade');//indicates to express that we're using jade templates
app.set('views', __dirname + '/views');//tells express where our jade templates are at

//this route in prepared to accept GET requests. the '/' indicates the root of our application.
//2 required arguments: where are we expecting to get the request (the '/'), 
//and a callback - what do we do when we recieve a request at this route (function(request, response)?
app.get('/', function(req, res) {//req and res are automatically generated by express and passed in to the .get method, similar to (event). 
								//you just need a placeholder argument here, and rec/res are the stadard.

	//refers to the index view template that is saved in the jade views folder. this loads the template.
	res.render('index');//express sends (renders) the html. render (or send), 
						//will be the last thing you do, you cant send anythong more to the client once you send the first time.
});

app.get('/about', function(req, res) {
	res.send('all about this page');//you can just type whatever you want and it will send to this page,
									//vs .render which you use to display a view template you've already created and stored in the views folder.
})

var server = app.listen(3590, function() {
	console.log('Express server listening on port ' + server.address().port);
});