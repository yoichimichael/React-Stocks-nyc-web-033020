import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const stocks = 'http://localhost:3000/stocks'

class App extends Component {

  state = {
    stocks: [],
    displayStocks: [],
    myStocks: [],
  };

  componentDidMount(){
    fetch(stocks)
    .then(resp => resp.json())
    .then(stocks => {
      this.setState({
        stocks: stocks,
        displayStocks: stocks
      })
    })
  };

  showStocks = (stocks) => {
    this.setState({
      displayStocks: stocks
    });
  };

  sortStocks = (sortType) => {
    if(sortType === "name"){
      const sorted = this.state.stocks.sort((a,b) => (a.name > b.name) ? 1 : -1)
      this.setState({
        stocks: sorted
      });
    } else if (sortType === "price"){
      const sorted = this.state.stocks.sort((a,b) => (a.price > b.price) ? 1 : -1)
      this.setState({
        stocks: sorted
      });
    }
  };

  filterStocks = (stockType) => {
    if(stockType === 'Tech'){
      const filtered = this.state.stocks.filter(stock => stock.type === stockType)
      this.setState({
        stocks: filtered
      });
    } else if (stockType === 'Finance'){
      const filtered = this.state.stocks.filter(stock => stock.type === stockType)
      this.setState({
        stocks: filtered
      });
    } else if (stockType === 'Sportswear'){
      const filtered = this.state.stocks.filter(stock => stock.type === stockType)
      this.setState({
        stocks: filtered
      });
    }
  };

  buyStock = (id) => {
    
    const stock = this.state.stocks.find(stock => stock.id === id);
    const found = this.state.myStocks.some(stock => stock.id === id);

    if (!found){
      // const boughtStocks = this.state.myStocks.concat([stock])    
      // this.setState({
      //   myStocks: boughtStocks
      // }, () => console.log(this.state.myStocks))
      this.setState(previousState => ({
        myStocks: previousState.myStocks.concat([stock])
      }))
    }
  };

  sellStock = (id) => {
    // const stock = this.state.myStocks.find(stock => stock.id === id);
    const cutStocks = this.state.myStocks.filter(stock => stock.id !== id)

    this.setState({
      myStocks: cutStocks
    })
  };

  render() {
    return (
      <div>
        <Header/>
        <MainContainer filterStocks={this.filterStocks} sortStocks={this.sortStocks} buyStock={this.buyStock} sellStock={this.sellStock} stocks={this.state.stocks} myStocks={this.state.myStocks}/>
      </div>
    );
  }
}

export default App;
