// routers
const controller = require('../controller/controller')
const authJwt = require('./verifyJwtToken')

module.exports = (app) => {

  app.get('/', (req, res) => {
    // res.sendFile(__dirname+ '/index.html');
    res.render("index", {secret: "1234"});
  })
  
  // login the users
  app.post('/signin',controller.signin)
  
  // Validate the token
  app.post('/validate',[authJwt.isAuthenticated] ,controller.validate)
  
  // Register new user
  app.post('/signup', controller.signup)     
  
};