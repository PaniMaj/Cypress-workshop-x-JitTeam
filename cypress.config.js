const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: { videoOnFailOnly: true },

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },

    defaultCommandTimeout: 6000, // miliseconds
    viewportHeight: 768,
    viewportWidth: 1280,

    baseUrl: "https://automationteststore.com",
  },

  watchForFileChanges: false,
  //defaultCommandTimeout: 3000, // miliseconds
});
