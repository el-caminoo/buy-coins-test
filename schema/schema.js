const graphql = require('graphql');
const { buildSchema } = graphql


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    calculatePrice(type: action, margin: Float!, exchangeRate: Float!): Float
  },
  enum action {
    BUY
    SELL
  }
`);

module.exports = schema