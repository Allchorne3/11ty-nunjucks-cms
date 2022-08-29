const { DateTime } = require("luxon")

module.exports = function(eleventyConfig) {

    //from 11tyrocks: https://11ty.rocks/eleventyjs/dates/
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })

    eleventyConfig.setBrowserSyncConfig({
        open: true
    })

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}