const appRoot = require('app-root-path')
const path = require('path')
module.exports = {
    PORTAL_TITLE: "Swag Labs",
    WRONG_USERNAME: "wrong_username",
    WRONG_PASSWORD: "wrong_password",
    PATHS: {
        CUCUMBER_REPORT_PATH: path.join(
            `${appRoot}/report/`),
        RERUN_FILE_PATH: path.join(
            `${appRoot}/report/@rerun.txt`
        ),
        LOG_FILE_PATH: path.join(
            `${appRoot}/report/logs/`
        )
    }
}