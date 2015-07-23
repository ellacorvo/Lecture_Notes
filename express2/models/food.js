 //this is a data model
 //list of all fooditem instances
 var allFoods = [];

 //this is the base class for the model
 var FoodItem = function(name, flavor, image){
 		this.name = name;
 		this.flavor = flavor;
 		this.image = image;
 		this.slug = name.toLowerCase().replace(/ /g)
 }

 var addFood = function(name, flavor, image){
 	var newFood = new FoodItem(name ,flavor, image);
 	allFoods.push(newFood);
 }

 addFood('Pizza', 'savory', 'http://assets.bigdealsmedia.net/images/47354.jpg')
 addFood('lasagna', 'good', 'http://images.media-allrecipes.com/userphotos/250x250/00/03/24/32427.jpg')

var foodFind = function(slug){
	return allFoods.filter(function(element){
		return element.slug === slug
	})[0]
}

var foodDelete = function(slug){
	// allFoods = allFoods.filter(function(element){
	// 	return element.slug !== slug//selects and saves everything except the item you selected to delete
	// })//but this wont work beacuse it doesnt change the original array.
 	for (var i = 0; i,allFoods.length; i++) {
 		if(allFoods[i].slug === slug){
 			allFoods.splice(i, 1);
 			return
 		}
 	}
}

 module.exports = {
 	allFoods : allFoods,
 	addFood : addFood,
 	FoodItem : FoodItem,
 	foodFind : foodFind,
 	foodDelete : foodDelete
 }