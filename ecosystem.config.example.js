module.exports = {
  apps: [{
    name: "Pizza Store",
    script: "./server/index.js",
    env_production: {
      NODE_ENV: "production",
      PORT: 4001,
      MONGODB_URL: "mongodb://127.0.0.1/db-name",
      JWT_SECRET: "",
      PLAIN_SECRET: "",
    },
  }]
}
