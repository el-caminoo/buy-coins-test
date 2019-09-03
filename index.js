var express = require('express');
var app = express();
const PORT = process.env.PORT || 8000

data = [{
    name: 'Anthony',
    deployed: 'true'
}]
app.get('/', (req, res) => {
    res.send(data);
});

app.listen(PORT, () => {
    console.log('working');
});