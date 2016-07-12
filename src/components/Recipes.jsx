var Recipes = (props) => (
  <div>
    Recipes
    <RecipeEntry recipe={props.recipes[0]} key={props.recipes[0].id} />
    <RecipeEntry recipe={props.recipes[1]} key={props.recipes[1].id} />
    <RecipeEntry recipe={props.recipes[2]} key={props.recipes[2].id} />
  </div>
);