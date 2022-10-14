require('dotenv').config();

//? Variables de entorno
const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  db:{
    port: process.env.DB_PORT || 5000,
    username: process.env.DB_USER || 'postgress',
    password: process.env.DB_PASS || 'b0u3',
    host: process.env.DB_HOST || 'localhost',
    name: process.env.DB_NAME
  }
};

module.exports = config