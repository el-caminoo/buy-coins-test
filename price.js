const url = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'
const axios = require('axios');
// This method returns the exchange rate of BTC/USD 
var price = axios.get(url)
            .then(response => {
                return (response.bpi.USD.rate_float);
            })
            .catch(error => {
                return(error)
            })


// price = {"time":{"updated":"Sep 5, 2019 12:23:00 UTC","updatedISO":"2019-09-05T12:23:00+00:00","updateduk":"Sep 5, 2019 at 13:23 BST"},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org","bpi":{"USD":{"code":"USD","rate":"10,569.9883","description":"United States Dollar","rate_float":10569.9883}}}
module.exports = price