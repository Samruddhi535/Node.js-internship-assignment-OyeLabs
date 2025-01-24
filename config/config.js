require('dotenv').config(); 

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'postgres', 
    password: process.env.DB_PASSWORD || 'imarticus', 
    database: process.env.DB_NAME || 'node_crud_db', 
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  },
};
