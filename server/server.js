const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// environment variables
require('./config/env')

// Middlewares
app.use(bodyParser.urlencoded({
  extended : false
}));
app.use(bodyParser.json());

require('./router/index')(app)

// To start the server
app.listen(process.env.PORT, ()=>{
  console.log(`server up at ${process.env.PORT}`)
})