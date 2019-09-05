// const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'
// const axios = require('axios');

// var price = axios.get(endpoint)
//         .then(response => {
//             return (response.data.bpi.USD.rate_float);
//         }).catch(error => {
//             console.log(error)
//         });

// This method returns the exchange rate of BTC/USD 
data = {
    "time": {
        "updated": "Sep 5, 2019 12:23:00 UTC",
        "updatedISO":"2019-09-05T12:23:00+00:00",
        "updateduk":"Sep 5, 2019 at 13:23 BST"
    },
    "disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
    "bpi":{
        "USD":{
            "code":"USD",
            "rate":"10,569.9883",
            "description":"United States Dollar",
            "rate_float": 10569.9883
        }
    }
}
price = data.bpi.USD.rate_float;
module.exports = price