// var str = "Mobile Army Surgery Hospital";
// var reduceMe = str.split(" ");

// console.log(reduceMe);

// var makeacronym = _.reduce(reduceMe, function(acronym, currentWord) {
// 	// console.log(acronym);
// 	// console.log(currentWord);


// 	return acronym + currentWord[0].toUpperCase() + '.'

// }, ' ');
// ß
// console.log(makeacronym);

// var treasures = [
// 	{
// 		type : 'wood',
// 		treasure : 'gold'
// 	},
// 	{
// 		type : 'wood',
// 		treasure : 'booty'
// 	},
// 	{
// 		type : 'metal',
// 		treasure : 'booty'
// 	}

// ]

// var getBooty = _.find(treasures, function(object){
// 	return object.treasure === 'booty';
// })

// console.log(getBooty);


// var whatType = _.pluck(treasures, 'type');
// console.log(whatType);

// var result = _.chain(treasures)
// 	.pluck('type')
// 	.uniq()
// 	.value()

// console.log(result);

// var treasureChests = [
// 	{
// 		type : 'wood',
// 		treasure : ['gold', 'booty', 'dublooons', 'javascripties']
// 	},
// 	{
// 		type : 'wood',
// 		treasure : ['booty', 'dubloons', 'weapons']
// 	},
// 	{
// 		type : 'metal',
// 		treasure : ['booty', 'javascripties', 'breakfast cereal']
// 	}
// ]

// var whatTreasures = _.chain(treasureChests)
// 	.pluck('treasure')
// 	.flatten()
// 	.uniq()
// 	.value()

// console.log(whatTreasures);

//..............OOP..............

//constructor fucntions

// var Cat = function(name, color, smell, whiskers) {
// 	this.name     = name;
// 	this.color    = color;
// 	this.smell    = smell;
// 	this.whiskers = whiskers;
// 	// this.sleep = function() {
// 	// 	console.log('zzzzzzzz');
// 	// }
// 	// this.eat = function() {
// 	// 	console.log('nomnomnom');
// 	// }

// }

// var blackCat = new Cat('Purrkins', 'black', 'bad', true);
// console.log(blackCat);

// var tabbyCat = new Cat("Paul", 'orange', 'good', false);
// console.log(tabbyCat);

// Cat.prototype.sleep = function() {
// 	console.log(this.name + ' is sleeping');
// }

// blackCat.sleep();



// var Quotes = function(text, author) {
// 	this.text = text || 'none';
// 	this.author = author || 'no author';
// }

// var myQuote = new Quotes("Now is the winter of our discontent...", 'Shakespeare');
// console.log(myQuote);

// // var emptyQuote = new Quotes();
// // console.log(emptyQuote);

// Quotes.prototype.countWords = function() {
// 	return this.text.split(' ').length
// }

// console.log(myQuote.countWords());

// Quotes.prototype.create = function() {
// 	var thisQuote = $('<div class="myquote"></div>')
// 	thisQuote.text(this.text + " author: " + this.author);

// 	return thisQuote;

// }

// $('body').append( myQuote.create() )


//..................Inheritance.......//

// var Monkey = function(name, color) {
// 	this.name = name;
// 	this.color = color;
// }

// Monkey.prototype.climb = function(tree) {
// 	console.log(this.name + " climbs the " + tree + " tree.");
// }

// var george = new Monkey('george', 'red');
// george.climb('oak');

// var FlyingMonkey = function(name, color, wingspan){
// 	Monkey.call(this, name, color)
// 	this.wingspan = wingspan;
// }

// FlyingMonkey.prototype = new Monkey();//gives the child class the prototype methods of the Monkey parent class
// FlyingMonkey.prototype.constructor = FlyingMonkey; //this is so you can reference the actual constructor you want, not just the parent one you called which will be the default and not very descriptive.
// FlyingMonkey.prototype.fly = function() {
// 	console.log(this.name + ' flew ' + this.wingspan * 10 + ' feet.')
// }

// var evilGeorge = new FlyingMonkey('evil george', 'black', 150);
// evilGeorge.fly();
// evilGeorge.climb('pine');

//............node..........//

// console.log(process.argv)
// var string = process.argv[2];//arguments [0] is node, [1] is your .js file, and arguments [2] on are the arguments you want to call/pass into functions

// var reverse = function(string) {
// 	return string.split('').reverse().join('');
// }

// console.log(reverse(string));

var fs = require('fs') //requires the filesystem module

var notes = fs.readFileSync('./notes.txt', 'utf-8');//'reads' the file and translates it into text

fs.writeFileSync('output.txt', notes);//create new file and writes the content from the variable that points to the copied text











