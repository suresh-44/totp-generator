const crypto = require("crypto");


let getToken = () => {
  let RG_TIME = 1561115594546;

  let CR_TIME = new Date().getTime();
  let mean = ~~((CR_TIME - RG_TIME) / 30000);
  let hash = crypto.createHmac("sha1", mean.toString()).digest("hex");

  return parseInt("0x" + hash.substr(-4)) % 10000;
};

let token = getToken()

console.log(token)