var express = require('express');
var app = express();


data = [{
    name: 'Anthony',
    deployed: 'true'
}]
app.get('/', (req, res) => {
    res.send(data);
});

app.listen(8000, () => {
    console.log('working');
});