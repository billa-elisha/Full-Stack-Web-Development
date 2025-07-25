import dotenv from "dotenv";

dotenv.config();

const config = {
  // this makes sure to get the available port or url during production or use the default
  PORT: process.env.PORT || 5000,
  MANGODB_URL: process.env.MANGODB_URL || "mongodb://localhost:27017/dbName",
  JWT_SECRET: process.env.JWT_SECRET || "mysecret",
  JWT_EPIRY: process.env.JWT_EPIRY || "30d",
};

export default config;
