module.exports = {
  apps: [{
    name: "Pizza Store",
    script: "./server/index.js",
    env_production: {
      NODE_ENV: "production",
      PORT: 4001,
      MONGODB_URL: "mongodb://127.0.0.1/petes-bits_pizza",
      JWT_SECRET: "buypizzapiewhatasecretohmy",
      PLAIN_SECRET: "buypizzapieplainsecret",
    },
  }]
}
