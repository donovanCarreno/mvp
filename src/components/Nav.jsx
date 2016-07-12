var Nav = (props) => (
  <div>
    Protein:<input type="text" onChange={props.protein} />
    Carbs:<input type="text" onChange={props.carbs} />
    Fat:<input type="text" onChange={props.fat} />
    <button onClick={props.handleSearch}>Search</button>
  </div>
);