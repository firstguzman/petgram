const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://petgrambyfirstguzman.vercel.app/',
    chromeWebSecurity: false,
    viewportHeight: 800,
    viewportWidth: 500
  }
})
