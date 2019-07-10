const Sequelize = require('sequelize');
const userModel = require('../models/user');
const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
  dialect : process.env.DIALECT
});

const user = userModel(sequelize, Sequelize);
sequelize.sync()
         .then(() => {
           console.log('connected to Database');
         })
         .catch(err => console.log(err));

module.exports  =  user;