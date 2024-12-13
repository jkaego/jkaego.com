require("dotenv").config();
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("index.css");
    eleventyConfig.addGlobalData('env', process.env);
    eleventyConfig.addPlugin(syntaxHighlight);
};