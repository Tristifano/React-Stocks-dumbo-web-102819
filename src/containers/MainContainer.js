import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor() {
    super();
    this.state = {
      allStocks:[],
      sortType:"",
      presentedStocks:[],
      portfolioStocks:[]
    }
  }
  

  componentDidMount() {
    this.getStocks()
  }

  getStocks = () => {
    fetch('http://localhost:3000/stocks')
    .then(r => r.json())
    .then(stocks => this.setState({
      allStocks:stocks,
      presentedStocks:stocks
    }))
  }

  addStockToPortfolio = (stock) => {
    // console.log(stock)
    let newPortfolio = [...this.state.portfolioStocks,stock]
    this.setState({
      portfolioStocks:newPortfolio
    },() => {console.log(this.state.portfolioStocks)})
  }

  removeStockFromPortfolio = (stock) => {
    let index = this.state.portfolioStocks.indexOf(stock)
    let newPortfolio = [...this.state.portfolioStocks]
    newPortfolio.splice(index,1)
    this.setState({
      portfolioStocks:newPortfolio
    })
  }

  sortChange = (sortType) => {
    let sorted = [...this.state.presentedStocks]
    if (sortType === 'alphabetically') {
      sorted = sorted.sort((a,b) => (a.name > b.name) ? 1 : -1)
      this.setState({
        presentedStocks: sorted
      })
    } else if (sortType === 'price') {
      sorted = sorted.sort((a,b) => (a.price > b.price) ? 1 : -1)
      this.setState({
        presentedStocks: sorted
      })
    } else {
      this.setState({
        presentedStocks: this.state.allStocks
      })
    }
  }

  filterChange = (filterType) => {
    if (!(filterType === "All")) {
      let filtered = [...this.state.allStocks]
      filtered = filtered.filter(stock =>  stock.type === filterType)
      this.setState({
        presentedStocks: filtered
      })
    } else {
      this.setState({
        presentedStocks: this.state.allStocks
      })
    }
    
  }

  render() {
    return (
      <div>
        <SearchBar onSortChange={this.sortChange} onFilterChange={this.filterChange}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.presentedStocks} onStockClick={this.addStockToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolioStocks} onStockClick={this.removeStockFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
