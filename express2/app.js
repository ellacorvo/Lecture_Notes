var express = require('express');

//we need this to recieve data from post requests.
//you can only transmit strings over http. body parser converts the strings back into javascript objects.
//body-parser attaches the from data (the body of the post request) onto req.body
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
//app.use declares application level MIDDLEWARE.
//app.set runs only once, but app.use runs on every request.
app.use(express.static(__dirname + '/public'));//declaring that we save our static files in the 'public' folder.
//where you store client side/jquery type files, CSS and images.
app.use(bodyParser.urlencoded({extended: false}));//this needs to happen before we do anything with our requests.

//view routes
app.get('/', indexController.index);
app.get('/foods/:slug', indexController.foodPage);

//API route
app.get('/foods/:slug/delete', apiController.deleteFood);

// var foods = [
// 	{name : 'pineapple'},
// 	{name : 'haggis'},
// 	{name : 'saag'}
// ]

// var siteCounter = 1

// app.get('/', function(req,res){
// 	res.render('index', {
// 		counter : siteCounter,
// 		foods : foods
// 	});

// 	siteCounter++
// })

// app.post('/submit', function(req,res){
// 	//the name attr becomes the key in req.body. without a name attribute, it will not be sent
// 	foods.push({ name : req.body.food })
// 	//a request always expects a response, you should send something of the website hangs.
// 	res.redirect('/')//this just rediects back to the homepage
// })

var server = app.listen(4072, function() {
	console.log('Express server listening on port ' + server.address().port);
});
