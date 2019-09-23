const Sequelize = require('sequelize');
const userModel = require('../models/user');
const sequelize = new Sequelize("postgres://ndlcmkmr:DPDCoZNZn7t7D6acG9FZxluz1izt2aak@raja.db.elephantsql.com:5432/ndlcmkmr");

const user = userModel(sequelize, Sequelize);
sequelize.sync()
         .then(() => {
           console.log('connected to Database');
         })
         .catch(err => console.log(err));

module.exports  =  user;