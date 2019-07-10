const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../config/sequelize');

module.signin = (res, req) => {

  User.findOne({
    where : {
      email : req.body.email
    }
  }).then(user => {
    if(!user) {
      return res.status(404).json( {msg :'user is not found'});
    }

    const passwordIsValid = bcrypt.compare(req.body.password, user.password);

    if(!passwordIsValid) {
      return res.status(401).json({auth: false, token : 'invalid', msg : 'password is incorrect'});
    }

    const token = jwt.sign({id : user.id}, process.env.secret);

    res.status(200).json({auth : true, token});
  }).catch(err => {
    res.status(500).json(err)
  })
}