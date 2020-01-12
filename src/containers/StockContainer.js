import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  createCards = () => {
   return this.props.stocks.map((stock,index) => <Stock key={index} stock={stock} onHandleClick={this.props.onStockClick} />)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.createCards()
        }
      </div>
    );
  }

}

export default StockContainer;
