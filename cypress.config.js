const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  responseTimeout: 120e3,
  videoUploadOnPasses: false,
  chromeWebSecurity: false,
  video: false,
  e2e: {
    baseUrl: 'https://iodinesoftware.com',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
