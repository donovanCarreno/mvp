class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			recipes: exampleRecipeData,
			protein: 0,
			carbs: 0,
			fat: 0
		};
	}

	getProtein(val) {
		this.setState({
			protein: val.target.value
		});
	}

	getCarbs(val) {
		this.setState({
			carbs: val.target.value
		});
	}

	getFat(val) {
		this.setState({
			fat: val.target.value
		});
	}

	getData(data) {
		data = data.sort(function(a, b) {
			return b.protein - a.protein;
		});

		this.setState({
			recipes: data
		});
	}

	getRecipe(id) {
		this.props.getRecipeById(id);
	}

	handleClick() {
		var protein = this.state.protein;
		var carbs = this.state.carbs;
		var fat = this.state.fat;

		this.props.searchRecipes(protein, carbs, fat, this.getData.bind(this));
	}

  render() {
    return (
      <div className="jumbotron text-center">
        <Nav
        	protein={this.getProtein.bind(this)}
        	carbs={this.getCarbs.bind(this)}
        	fat={this.getFat.bind(this)} 
        	handleSearch={this.handleClick.bind(this)}/>
        <h1>Search For Recipes That Fit Your Macros</h1>
        <Recipes recipes={this.state.recipes} recipeId={this.getRecipe.bind(this)} />
      </div>
    );
  }
}