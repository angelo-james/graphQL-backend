const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');
const port = 3800;

const app = express();

app.use('/graphql', expressGraphQL({
  schema:schema,
  graphiql:true
}));

app.listen(port, () => {
  console.log(`You're listening on port ${port}...`)
})