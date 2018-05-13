const yaml_config = require('node-yaml-config')
const path = require('path')

const lrApp = {
  plugins: {},

  init: (x) => {
    // Load config from config.yml
    const appRoot = path.resolve('./')
    const config = yaml_config.load(appRoot + '/config.yml')

    // Load plugins.
    for (var pluginName in config.plugins) {
      const plugin = require(`./plugins/${pluginName}.js`)
      const pluginConfig = config.plugins[pluginName]
      plugin.init(pluginConfig, this)
      this.plugins[pluginName] = plugin
      console.log(config.plugins[pluginName], pluginName)
    }
  }
}

lrApp.init()
