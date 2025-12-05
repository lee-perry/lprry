const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets')
  return {
	passthroughFileCopy: true
  };
}

module.exports.config = {
  templateFormats: ["html", "liquid", "njk", "md"],
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/atom/",
    collection: {
      name: "all", // iterate over `collections.posts`
      limit: 50,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "lprry",
      subtitle: "Dispatches from Burnley - Talking about running, cycling, learning code, dogs, our allotment, and Burnley FC",
      base: "https://l.prry.uk",
      author: {
        name: "Lee Perry",
        email: "lee@prry.uk", // Optional
      }
    }
  });
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss", // or "rss", "json"
    outputPath: "/feed.xml/",
    collection: {
      name: "all", // iterate over `collections.posts`
      limit: 50,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "lprry",
      subtitle: "Dispatches from Burnley - Talking about running, cycling, learning code, dogs, our allotment, and Burnley FC",
      base: "https://l.prry.uk",
      author: {
        name: "Lee Perry",
        email: "lee@prry.uk", // Optional
      }
    }
  });
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(feedPlugin, {
    type: "json", // or "rss", "json"
    outputPath: "/feed.json/",
    collection: {
      name: "all", // iterate over `collections.posts`
      limit: 50,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "lprry",
      subtitle: "Dispatches from Burnley - Talking about running, cycling, learning code, dogs, our allotment, and Burnley FC",
      base: "https://l.prryuk",
      author: {
        name: "Lee Perry",
        email: "lee@prry.uk", // Optional
      }
    }
  });
};



module.exports = function (eleventyConfig) {
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