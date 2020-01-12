import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      none:true,
      alphabetically:false,
      price:false
    }
  }
  

  handleFilterChange = (event) => {
    this.props.onFilterChange(event.target.value)
  }

  handleSortChange = (event) => {
    this.setState({
      none:false,
      alphabetically:false,
      price:false
    })
    this.setState({
      [event.target.value]:true
    })
    this.props.onSortChange(event.target.value)
  }

  render() {
    return (
      <div>

      <strong>Sort by:</strong>
      <label>
        <input className="sort-radio" type="radio" value="none" checked={this.state.none} onChange={this.handleSortChange}/>
        None
      </label>
      <label>
        <input className="sort-radio" type="radio" value="alphabetically" checked={this.state.alphabetically} onChange={this.handleSortChange}/>
        Alphabetically
      </label>
      <label>
        <input className="sort-radio" type="radio" value="price" checked={this.state.price} onChange={this.handleSortChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={this.handleFilterChange}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
    );
  }
}

export default SearchBar;
