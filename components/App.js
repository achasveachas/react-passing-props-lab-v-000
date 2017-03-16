const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component  {

  constructor() {
    super()
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
    }
  }

  render() {
    const { fruit, filters, currentFilter } = this.state
    return (
      <FruitBasket fruit={fruit} filters={filters} currentFilter={currentFilter} />
    );
  }
}

module.exports = App;
