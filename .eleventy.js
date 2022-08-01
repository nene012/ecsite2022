module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css")
  eleventyConfig.addPassthroughCopy("./src/goods")
  eleventyConfig.addPassthroughCopy("./src/js")
  return {
    dir: {
      input: "src",
    },
  }
}
