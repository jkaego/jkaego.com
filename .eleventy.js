require("dotenv").config();
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("index.css");
    eleventyConfig.addGlobalData('env', process.env);
};