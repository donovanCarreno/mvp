var Recipes = (props) => (
  <div>
  	<h1>Props: {props.recipeId}</h1>
    <h2>Recipes</h2>
    {props.recipes.map(recipe =>
    	<RecipeEntry recipe={recipe} key={recipe.id} recipeId={props.recipeId}/>)}
  </div>
);