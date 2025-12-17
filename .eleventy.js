const pluginRss = require("@11ty/eleventy-plugin-rss");

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
  
  eleventyConfig.configureErrorReporting({ allowMissingExtensions: true });
  
  eleventyConfig.addPassthroughCopy('assets')
  return {
  passthroughFileCopy: true
  };
  
};

