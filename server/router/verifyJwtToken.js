const jwt = require('jsonwebtoken');

const User = require('../config/sequelize')

exports.isAuthenticated = (req, res, next) => {
  let token = req.header('x-access-token');

  if(!token){
    return res.status(403).json({msg : 'Not logedin'});
  }

  jwt.verify(token, process.env.SECRET, (err, decode) => {
    if(err){
      return res.status(500).json({msg : "Failed to Authenticate", err})
    }
    req.userId = decode.id
    next()
  })
}