const { PATHS } = require('../support/constants')
module.exports = {
    default: {
        "retry": 0,
        "format": [`"html":"${PATHS.CUCUMBER_REPORT_PATH}/cucumber-report.html"`],
        // "format": [`"rerun":"${PATHS.RERUN_FILE_PATH}"`],
        "forceExit": true
    }
}