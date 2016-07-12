var searchMashapeRecipes = (protein = 0, carbs = 0, fat = 0, callback) => {
	var root = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes';
	var queryString = `/findByNutrients?maxcarbs=${carbs}&maxfat=${fat}&maxprotein=${protein}`;

	$.ajax({
	  url: root + queryString,
	  headers: {"X-Mashape-Key": MASHAPE_API_KEY},
	  method: 'GET',
	  contentType: 'application/json',
	  error: function(err) {
	  	console.log('err:', err);
	  }
	})
	.done(function(data) {
		callback(data);
	});
};

var getRecipeById = (id) => {
	var root = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes';
	var queryString = `/${id}/information`;

	$.ajax({
	  url: root + queryString,
	  headers: {"X-Mashape-Key": MASHAPE_API_KEY},
	  method: 'GET',
	  error: function(err) {
	  	console.log('err:', err);
	  }
	})
	.done(function(data) {
		window.location.assign(data.sourceUrl);
	});
};

/*
unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/156992/information?includeNutrition=false")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
*/

/*
// These code snippets use an open-source library.
unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByNutrients?maxcalories=1000&maxcarbs=40&maxfat=20&maxprotein=50&mincalories=0&minCarbs=25&minfat=10&minProtein=35")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
*/



