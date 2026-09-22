export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/js");

  eleventyConfig.addCollection("about", (collection) =>
    collection.getFilteredByGlob("src/about.md")
  );

  eleventyConfig.addCollection("experience", (collection) =>
    collection.getFilteredByGlob("src/experience/*.md").sort((a, b) => a.data.order - b.data.order)
  );

  eleventyConfig.addCollection("projects", (collection) =>
    collection.getFilteredByGlob("src/projects/*.md").sort((a, b) => a.data.order - b.data.order)
  );

  eleventyConfig.addCollection("writing", (collection) =>
    collection.getFilteredByGlob("src/writing/*.md").sort((a, b) => a.data.order - b.data.order)
  );

  eleventyConfig.addCollection("talks", (collection) =>
    collection.getFilteredByGlob("src/talks/*.md").sort((a, b) => a.data.order - b.data.order)
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
