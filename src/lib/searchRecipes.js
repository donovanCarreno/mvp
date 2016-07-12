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

var searchMashapeRecipes = () => {
	var root = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByNutrients?maxcarbs=40&maxfat=20&maxprotein=50';
	$.ajax({
	  url: root,
	  headers: {"X-Mashape-Key": MASHAPE_API_KEY},
	  method: 'GET',
	  error: function(err) {
	  	console.log('err:', err);
	  }
	})
	.done(function(data) {
		console.log('done:', data[0]);
	});
};