const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // output image formats
    formats: ["avif", "webp", "jpeg"],

    // output image widths
    widths: ["auto"],

    // optional, attributes assigned on <img> nodes override these values
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
      pictureAttributes: {}
    },
  });
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets')
  return {
	passthroughFileCopy: true
  };
  
}