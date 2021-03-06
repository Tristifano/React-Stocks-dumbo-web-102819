import React, { Component } from 'react';

class Stock extends Component {

  handleClick = () => {
    this.props.onHandleClick(this.props.stock)
  }

  render() {
    return (
      <div>
        <div className="card" onClick={this.handleClick}>
          <div className="card-body">
            <h5 className="card-title">{
                this.props.stock.name
              }</h5>
            <p className="card-text">{
                `${this.props.stock.ticker}: ${this.props.stock.price}`
              }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Stock;
