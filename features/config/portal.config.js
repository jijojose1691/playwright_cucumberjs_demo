const { env } = process;

module.exports = {
    BASE_URL: env.BASE_URL || 'https://www.saucedemo.com/',
    USER_NAME: env.USER_NAME || 'standard_user',
    PASSWORD: env.PASSWORD || 'secret_sauce',
};
