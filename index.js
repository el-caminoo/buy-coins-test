var express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const root = require('./resolver/resolver');
const price = require('./price');
const app = express();
const PORT = process.env.PORT || 8000



app.use('/graphiql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(PORT, () => {
  console.log(price);
  console.log('Listening on ' + PORT);
});