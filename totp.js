const crypto = require("crypto");

const db = {
  username: "oslevvce",
  password: "123osl",
  secrete: 1561115594546
};

let getToken = () => {
  let RG_TIME = db.secrete;

  let CR_TIME = new Date().getTime();
  let mean = ~~((CR_TIME - RG_TIME) / 30000);
  let hash = crypto.createHmac("sha1", mean.toString()).digest("hex");

  return parseInt("0x" + hash.substr(-4)) % 10000;
};

let token = getToken()

console.log(token)