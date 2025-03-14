const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://notes-serverless-app.com',
    env: {
      hideCredentials: true,
    },
    screenshotOnRunFailure: true,
    fixturesFolder: false,
    video: false
  }
})