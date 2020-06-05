import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  handleClick = (id, event) => {
    // console.log(id)
    this.props.buyStock(id)
  };

  renderStocks = () => {
    const stocks = this.props.displayStocks
    return stocks.map(stock => {
      return (
        <div key={stock.id} onClick={(e) => this.handleClick(stock.id, e)}>
          <Stock {...stock}/>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStocks()
          //render the list of stocks here
        }
      </div>
    );
  }

}

export default StockContainer;
