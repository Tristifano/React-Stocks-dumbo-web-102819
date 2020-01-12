import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  createCards = () => {
    console.log(this.props.stocks)
    return this.props.stocks.map((stock,index) => <Stock key={index} stock={stock} onHandleClick={this.props.onStockClick} />)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.createCards()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
