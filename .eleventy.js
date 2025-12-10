const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports.config = {
  markdownTemplateEngine: 'njk',
  dataTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
  templateFormats: ["html", "liquid", "njk", "md"],
};

module.exports = function (eleventyConfig) {
  
  eleventyConfig.addCollection("everything", function (collectionApi) {
    // Get the individual collections
    const notes = collectionApi.getFilteredByTag("notes");
    const articles = collectionApi.getFilteredByTag("articles");
    const snaps = collectionApi.getFilteredByTag("snaps");
    const trainingLog = collectionApi.getFilteredByTag("training-log");
  
    // Merge them into one array
    const combined = [
      ...notes,
      ...articles,
      ...snaps,
      ...trainingLog
    ];
  
    // Optionally sort by date (newest first)
    combined.sort((a, b) => b.date - a.date);
  
    return combined;
  });
  
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/atom/",
    collection: {
      name: "everything", // iterate over `collections.everything`
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
      name: "everything", // iterate over `collections.posts`
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
  
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/atom/articles/",
    collection: {
      name: "articles", // iterate over `collections.posts`
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "lprry indieWeb garden - articles",
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
    outputPath: "/atom/notes/",
    collection: {
      name: "notes", // iterate over `collections.posts`
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "lprry indieWeb garden - notes",
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
    outputPath: "/atom/activities/",
    collection: {
      name: "training-log", // iterate over `collections.posts`
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "lprry indieWeb garden - activities",
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
    outputPath: "/atom/clips/",
    collection: {
      name: "clips", // iterate over `collections.posts`
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "lprry indieWeb garden - clips",
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
  
};

