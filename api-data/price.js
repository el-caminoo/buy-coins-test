const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'
const axios = require('axios');

var price = axios.get(endpoint)
        .then(response => {
            return (response.data.bpi.USD.rate_float);
        }).catch(error => {
            console.log(error)
        });

// This method returns the exchange rate of BTC/USD 
module.exports = price