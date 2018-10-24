const fs = require("fs-extra")
const path = require("path")
const dir = __dirname + '/template/'

const walk = (p, fileCallback, errCallback) => {
  fs.readdir(p, (err, files) => {

    if (err) {
        errCallback(err)
        return
    }

    files.forEach(file => {
      const fullPath = path.join(p, file)

      if(fs.statSync(fullPath).isDirectory()) {
        walk(fullPath, fileCallback)
      } else {
        fileCallback(fullPath)
      }
    })
  })
}

module.exports = api => {
  api.extendPackage({
    dependencies: {
      "nuxt-edge": "^2.0.0-25506422.d9d2d9e"
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
        "@vue/babel-preset-app": "^3.0.0-rc.2"
      }
    })
  }

  api.render('./template')

  let templates = []
  const fileCallback = path => {
    const simplePath = path.replace(dir, "")
    templates.push(simplePath)
  }
  const errCallback = err => console.log("Receive err:" + err)

  walk(dir, fileCallback, errCallback)

  api.postProcessFiles(files => {
    const fileList = Object.keys(files)
    const srcFileList = fileList.filter(file => /^src\//.test(file))
    const originals = srcFileList.filter(file => !templates.includes(file) && !/^src\/legacy\//.test(file))

    originals.forEach(path => {
      newPath = path.replace('src/', 'src/legacy/')
      files[newPath] = files[path]
      delete files[path]
    })
  })
}
