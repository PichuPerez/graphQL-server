const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema')
const app = express()

app.use(
  '/grahpql',
  expressGraphQL({
    schema,
    graphiql: true,
  })
)

app.listen(4000, () => {
  console.log('Server running on port 4000')
})
