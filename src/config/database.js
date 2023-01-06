require('dotenv/config');

module.exports = {
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    options: { dialect: process.env.DATABASE_DIALECT, host: process.env.DATABASE_HOST }
};