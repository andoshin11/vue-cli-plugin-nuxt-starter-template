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

  api.postProcessFiles(files => {
    console.log('shin test')
    const isTS = 'src/main.ts' in files
    const file = isTS
      ? 'src/main.ts'
      : 'src/main.js'
    const main = files[file]
    if (main) {
      // inject import for registerServiceWorker script into main.js
      const lines = main.split(/\r?\n/g)
      // const lastImportIndex = lines.findIndex(line => line.match(/^import/))
      lines[-1] += `\nI'm testing`
      files[file] = lines.join('\n')
    }
  })
}
