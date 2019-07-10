const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// environment variables
require('./config/env')

const User = require('./config/sequelize')

// routes

const index = require('./router/index')

// Middlewares
app.use(bodyParser.urlencoded({
  extended : false
}));
app.use(bodyParser.json());


app.use('/', index)

app.listen(3000, ()=>{
  console.log(`server up at 3000`)
})