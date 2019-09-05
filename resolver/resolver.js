const price = require('../api-data/price')
// The root provides a resolver function for each API endpoint
var root = {
    calculatePrice: function ({type, margin, exchangeRate}) {
      new_margin = margin/100;
      bitcoin_price = price;
      if (type == "BUY") {
        const index = bitcoin_price + (new_margin * bitcoin_price);
        return (exchangeRate * index);
      }
      else if (type == "SELL") {
        const index = bitcoin_price - (new_margin * bitcoin_price);
        return (exchangeRate * index);
      }
    }
  };


module.exports = root