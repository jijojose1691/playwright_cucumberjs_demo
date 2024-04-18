require('dotenv').config();

module.exports = {
    BASE_URL: process.env.BASE_URL || 'https://www.saucedemo.com/',
    USER_NAME: process.env.USER_NAME || 'standard_user',
    PASSWORD: process.env.PASSWORD || 'secret_sauce',
};
