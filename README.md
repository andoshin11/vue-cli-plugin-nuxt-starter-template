# vue-cli-plugin-nuxt-starter-template
> Nuxt.js starter project template for vue-cli ^3.0.0~ https://starter.nuxtjs.org/

## Warning :warning:
This plugin may cause some issues depending on the combination of your vue-cli setups.
Feel free to send any scale of issues. All of your feedbacks are gold to me.

## Requirements
- @vue/cli ^3.0.0-beta.6

## Quickstart

``` bash
$ cd <your vue-cli project path>

$ vue add nuxt-starter-template
```

## What it does when invoked
When vue-cli invokes this plugin,
- [Nuxt.js](https://github.com/nuxt/nuxt.js) is installed
- `nuxt` commands are added to your `package.json`. (This may overwrite some of your own scripts)
- Nuxt directories are added under `/src`. e.g. `/layouts`, `/pages`, `/store`
- `nuxt.config.js` is added on your root directory
- Your pre existing files under `/src` are moved inside `/legacy` so you can still take some goods from them

## TODO
- Setup CI
- Add Test
