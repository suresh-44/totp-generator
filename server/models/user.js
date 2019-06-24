module.exports = (sequlize, type) => {
  return sequlize.define('user', {
    id : {
      type: type.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
    username : type.STRING,
    password : type.STRING,
    secrete : type.STRING
  })
}