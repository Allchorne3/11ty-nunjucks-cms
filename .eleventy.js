const { DateTime } = require("luxon")

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/_redirects')

    // Recomplile 11ty when files change
    eleventyConfig.addWatchTarget("./src/style/")

    //from 11tyrocks: https://11ty.rocks/eleventyjs/dates/
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })

    // Automatically open up the browser on script runs
    eleventyConfig.setBrowserSyncConfig({
        open: true
    })

    return {
        dir: {
            input: "src",
            output: "public"
        },
        passthroughFileCopy: true,
    }
}