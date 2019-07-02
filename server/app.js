const express = require('express')
const graphQLHTTP = require('express-graphql')
const cors = require('cors')
const schema = require('./schema/schema')



const app = express()

app.use(cors())
app.use('/graphql', graphQLHTTP({
    schema,
    graphiql: true
}))


app.listen(8000, () => {
    console.log('Server started at port 8000')
})
