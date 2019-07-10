const express = require('express');

// routers
const controller = require('../controller/controller')
const authJwt = require('./verifyJwtToken')

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.send('Hello OSL')
  })
  
  // login the users
  app.post('/signin',controller.signin)
  
  // Validate the token
  app.post('/validate',[authJwt.isAuthenticated] ,controller.validate)
  
  // Register new user
  app.post('/signup', controller.signup)     
  
};