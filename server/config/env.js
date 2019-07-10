let env = process.env.NODE_ENV || "development";

if (env === "development") {
  const config = require("./env.json");
  const envConfig = config[env];

  Object.keys(envConfig).forEach(key => {
    if (key === "pool") {
      let pool = envConfig[key];
      Object.keys(pool).forEach(poolKey => {
        process.env[poolKey] = pool[poolKey];
      })
    } else {
      process.env[key] = envConfig[key];
    }
  });
}
