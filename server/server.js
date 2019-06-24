const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const User = require('./sequelize')

// Middlewares
app.use(bodyParser.urlencoded({
  extended : false
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello Express')
})

app.get('/user', (req, res)=> {
  User.findAll().then(users => {
    res.json(users)
  })
})

app.post('/users/register', (req, res) => {
  User.create({
    username : req.body.username,
    password : req.body.password,
    secrete : new Date().getTime.toString()
  }).then(user => {
    res.json(user)
  }).catch(err => console.log(err))
})


app.listen(3000, ()=>{
  console.log(`server up at 3000`)
})