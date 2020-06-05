import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.props.filterStocks} sortStocks={this.props.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} displayStocks={this.props.displayStocks} buyStock={this.props.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.props.myStocks} sellStock={this.props.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
