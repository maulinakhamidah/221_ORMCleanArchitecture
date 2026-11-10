require("dotenv").config();

const development = {
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "maulina123",
  database: process.env.DB_DATABASE || "prak9_db",
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT || 5432,
  dialect: process.env.DB_DIALECT || "postgres"
};

module.exports = { development }