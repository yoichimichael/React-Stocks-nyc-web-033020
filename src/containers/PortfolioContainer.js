import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  handleClick = (id, event) => {
    this.props.sellStock(id)
  };

  renderStocks = () => {
    const myStocks = this.props.myStocks
    return myStocks.map(stock => {
      return (
        <div key={stock.id} onClick={(e) => this.handleClick(stock.id, e)}>
          <Stock {...stock}/>
        </div>
      )
    })
  };

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderStocks()
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
