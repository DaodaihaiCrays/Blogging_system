require('dotenv').config()
const express = require('express')
const apiRoutes = require('../src/routes/api')

const port = process.env.PORT
const app = express()

app.use(express.json( )); // Used to parse JSON bodies
app.use(express.urlencoded( )); //Parse URL-encoded bodies

app.use('/v1/api', apiRoutes)
app.use('/uploads', express.static('./src/upload'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})