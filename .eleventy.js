const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports.config = {
  templateFormats: ["html", "liquid", "njk"],
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets')
  return {
	passthroughFileCopy: true
  };
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets')
  return {
  passthroughFileCopy: true
  };
  
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // output image formats
    formats: ["webp", "jpeg"],

    // output image widths
    widths: [295, 445, 895, 1395],
    heights: "auto",

    // optional, attributes assigned on <img> nodes override these values
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
        heights: "auto",
      },
      pictureAttributes: {}
    },
  });
  
};

