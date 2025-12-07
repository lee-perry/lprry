const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports.config = {
  markdownTemplateEngine: 'njk',
  dataTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
  templateFormats: ["html", "liquid", "njk", "md"],
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/atom/",
    collection: {
      name: "all", // iterate over `collections.posts`
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "lprry indieWeb garden",
      subtitle: "Burnley based, I talk about learning code and the indieWeb, staying fit by running, cycling, swimming and bouldering, retrogaming, our allotment, and life with our dogs and chickens.",
      base: "https://l.prry.uk",
      author: {
        name: "Lee Perry",
        email: "lee@prry.uk", // Optional
      }
    }
  });
  
  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss", // or "rss", "json"
    outputPath: "/feed/",
    collection: {
      name: "all", // iterate over `collections.posts`
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "lprry indieWeb garden",
      subtitle: "Burnley based, I talk about learning code and the indieWeb, staying fit by running, cycling, swimming and bouldering, retrogaming, our allotment, and life with our dogs and chickens.",
      base: "https://l.prry.uk/",
      author: {
        name: "Lee Perry",
        email: "lee@prry.uk", // Optional
      }
    }
  });  
  
  eleventyConfig.addPlugin(feedPlugin, {
    type: "json", // or "rss", "json"
    outputPath: "/json/",
    collection: {
      name: "all", // iterate over `collections.posts`
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "lprry indieWeb garden",
      subtitle: "Burnley based, I talk about learning code and the indieWeb, staying fit by running, cycling, swimming and bouldering, retrogaming, our allotment, and life with our dogs and chickens.",
      base: "https://l.prry.uk/",
      author: {
        name: "Lee Perry",
        email: "lee@prry.uk", // Optional
      }
    }
  });
  
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/atom/snaps/",
    collection: {
      name: "snaps", // iterate over `collections.posts`
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "lprry indieWeb garden - snaps",
      subtitle: "Burnley based, I talk about learning code and the indieWeb, staying fit by running, cycling, swimming and bouldering, retrogaming, our allotment, and life with our dogs and chickens.",
      base: "https://l.prry.uk/",
      author: {
        name: "Lee Perry",
        email: "lee@prry.uk", // Optional
      }
    }
  });
  
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

