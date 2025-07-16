import dotenv from "dotenv";

dotenv.config();

const config = {
  // this makes sure to get the available port or url during production or use the default
  PORT: process.env.PORT || 5000,
  MANGODB_URL: process.env.MANGODB_URL || "mango://localhost:5000/dbName",
};

export default config;
