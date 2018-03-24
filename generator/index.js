module.exports = api => {
  api.extendPackage({
    dependencies: {
      "nuxt": "^1.4.0"
    },
    scripts: {
      "dev": "nuxt",
      "build": "nuxt build",
      "start": "nuxt start",
      "generate": "nuxt generate"
    }
  })

  api.render('./template')
}
