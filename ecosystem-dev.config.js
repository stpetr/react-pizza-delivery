module.exports = {
  apps: [{
    name: "Pizza Store Dev",
    script: "./server/index.js",
    env_development: {
      NODE_ENV: "development",
      PORT: 3001,
      MONGODB_URL: "mongodb://127.0.0.1/petes-bits_pizza-dev",
      JWT_SECRET: "buypizzapiewhatasecretohmy-dev",
      PLAIN_SECRET: "buypizzapieplainsecret-dev",
    },
  }]
}
