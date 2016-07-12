// var searchRecipes = () => {
// 	var root = 'http://jsonplaceholder.typicode.com';

// 	$.ajax({
// 	  url: root + '/posts',
// 	  method: 'GET',
// 	  success: function(data) {
// 	  	console.log('success:', data[0]);
// 	  },
// 	  error: function(err) {
// 	  	console.log('err:', err);
// 	  }
// 	});
// };

var searchMashapeRecipes = (protein, carbs, fat, callback) => {
	var root = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes';
	var queryString = `/findByNutrients?maxcarbs=${carbs}&maxfat=${fat}&maxprotein=${protein}`;

	$.ajax({
	  url: root + queryString,
	  headers: {"X-Mashape-Key": MASHAPE_API_KEY},
	  method: 'GET',
	  error: function(err) {
	  	console.log('err:', err);
	  }
	})
	.done(function(data) {
		callback(data);
	});
};