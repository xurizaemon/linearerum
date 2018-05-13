const Feeds = {
  URLs: []

  init: (config, app) => {
    for (var URL in config) {
      if (typeof config.url !== 'string') {
        app.log.debug()
      }
    }
    console.log(config, 'config')
  }
}

module.exports = Feeds
