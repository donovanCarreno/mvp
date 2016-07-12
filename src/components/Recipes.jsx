var Recipes = (props) => (
  <div>
    <h2>Recipes</h2>
    {props.recipes.map(recipe =>
    	<RecipeEntry recipe={recipe} key={recipe.id} />)}
  </div>
);