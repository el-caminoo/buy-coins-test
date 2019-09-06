const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'
const axios = require('axios');

var data = axios.get(endpoint)
        .then(response => {
            return JSON.parse(response.data.bpi.USD.rate_float)
        }).catch(error => {
            console.log(error)
        });
// This method returns the exchange rate of BTC/USD
var price = data; 

module.exports = price