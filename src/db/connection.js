require("dotenv").config();
const { Sequelize } = require("sequelize");


const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        //logging: false
    }
);

// const connection = new Sequelize(process.env.DB_URI);

// clever cloud connection
// const connection = new Sequelize(process.env.CC_DB_CONNECTION);



module.exports = connection;

