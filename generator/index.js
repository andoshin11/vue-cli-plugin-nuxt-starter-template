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

  const hasBabelPlugin = api.hasPlugin('babel')
  if (!hasBabelPlugin) {
    api.extendPackage({
      devDependencies: {
        "@vue/babel-preset-app": "^3.0.0-beta.6"
      }
    })
  }

  api.render('./template')
}
