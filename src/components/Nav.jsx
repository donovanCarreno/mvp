var Nav = (props) => (
  <div>
    <span>Protein:<input type="text" onChange={props.protein} /></span>
    <span>Carbs:<input type="text" onChange={props.carbs} /></span>
    <span>Fat:<input type="text" onChange={props.fat} /></span>
    <button onClick={props.handleSearch}>Search</button>
  </div>
);