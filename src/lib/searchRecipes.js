var searchRecipes = () => {
	var root = 'http://jsonplaceholder.typicode.com';

	$.ajax({
	  url: root + '/posts',
	  method: 'GET',
	  success: function(data) {
	  	console.log('success:', data[0]);
	  },
	  error: function(err) {
	  	console.log('err:', err);
	  }
	});
};

var searchMashapeRecipes = () => {
	var root = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByNutrients';

	$.ajax({
	  url: root + '/posts',
	  headers: {"X-Mashape-Key": "apiKey"},
	  method: 'GET',
	  success: function(data) {
	  	console.log('success:', data[0]);
	  },
	  error: function(err) {
	  	console.log('err:', err);
	  }
	});
};