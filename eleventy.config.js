export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/js");

  // Extract a YouTube video id from watch / youtu.be / embed / shorts URLs.
  eleventyConfig.addFilter("youtubeId", (url) => {
    if (!url || typeof url !== "string") return null;
    const patterns = [
      /(?:youtube\.com\/watch\?(?:[^#]*&)?v=|youtube\.com\/embed\/|youtube\.com\/shorts\/|youtu\.be\/)([A-Za-z0-9_-]{11})/,
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  });

  eleventyConfig.addFilter("linkHost", (url) => {
    if (!url || typeof url !== "string" || url === "#") return null;
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return null;
    }
  });

  eleventyConfig.addCollection("about", (collection) =>
    collection.getFilteredByGlob("src/about.md")
  );

  eleventyConfig.addCollection("works", (collection) =>
    [
      ...collection.getFilteredByGlob("src/talks/*.md"),
      ...collection.getFilteredByGlob("src/writing/*.md"),
    ]
      .filter((item) => item.data.featured)
      .sort((a, b) => a.data.featuredOrder - b.data.featuredOrder)
  );

  eleventyConfig.addCollection("writing", (collection) =>
    collection.getFilteredByGlob("src/writing/*.md").sort((a, b) => a.data.order - b.data.order)
  );

  eleventyConfig.addCollection("talks", (collection) =>
    collection.getFilteredByGlob("src/talks/*.md").sort((a, b) => a.data.order - b.data.order)
  );

  eleventyConfig.addCollection("experience", (collection) =>
    collection.getFilteredByGlob("src/experience/*.md").sort((a, b) => a.data.order - b.data.order)
  );

  eleventyConfig.addCollection("credentials", (collection) =>
    collection.getFilteredByGlob("src/credentials/*.md").sort((a, b) => a.data.order - b.data.order)
  );

  return {
    dir: {
      input: "src",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
