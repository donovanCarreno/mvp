var RecipeEntry = (props) => (
  <div onClick={props.recipeId}>
    <h3>{props.recipe.title}</h3>
    <img src={props.recipe.image} />
    <h5>Protein: {props.recipe.protein}</h5>
    <h5>Carbs: {props.recipe.carbs}</h5>
    <h5>Fat: {props.recipe.fat}</h5>
  </div>
);

// {
//     "id": 36731,
//     "title": "Spring Vegetable Skillet",
//     "image": "https://spoonacular.com/recipeImages/spring-vegetable-skillet-36731.jpg",
//     "imageType": "jpg",
//     "calories": 62,
//     "protein": "2g",
//     "fat": "3g",
//     "carbs": "7g"
//   }