class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
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

	handleClick() {
		// console.log(this.props.apiKey);
		this.props.searchRecipes();
		console.log(this.state);
	}

  render() {
    return (
      <div>
        <Nav
        	protein={this.getProtein.bind(this)}
        	carbs={this.getCarbs.bind(this)}
        	fat={this.getFat.bind(this)} 
        	handleSearch={this.handleClick.bind(this)}/>
        <h1>Hello World</h1>
        <Recipes />
      </div>
    );
  }
}