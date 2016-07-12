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