var Recipes = (props) => (
  <div className="container">
  	<div className="row">
	    <h2></h2>
	    {props.recipes.map(recipe =>
	    	<RecipeEntry recipe={recipe} key={recipe.id} recipeId={props.recipeId}/>)}
	  </div>
  </div>
);