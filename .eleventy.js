const pluginRss = require("@11ty/eleventy-plugin-rss");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  
  eleventyConfig.addCollection("everything", function (collectionApi) {
    const notes = collectionApi.getFilteredByGlob("notes/*");
    const articles = collectionApi.getFilteredByGlob("articles/*");
    const snaps = collectionApi.getFilteredByGlob("snaps/*");
    const trainingLog = collectionApi.getFilteredByGlob("training-log/*");
  
    const combined = [
      ...notes,
      ...articles,
      ...snaps,
      ...trainingLog,
    ];
    combined.sort((a, b) => a.date - b.date);
    return combined;
  });
  
  eleventyConfig.addCollection("topics", function(collectionApi) {
    // Filter only items in the 'topics' folder
    return collectionApi.getFilteredByGlob("topics/*/index.md");
  });
  
  eleventyConfig.addPlugin(pluginRss);
  
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // output image formats
    formats: ["webp"],
    extensions: "html",
  
    // output image widths
    widths: [300, 450, 1200],
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
  
  eleventyConfig.configureErrorReporting({ allowMissingExtensions: true });
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('_redirects')
  
  return {
  passthroughFileCopy: true
  };
  
};

