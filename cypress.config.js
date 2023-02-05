const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
    teststore_url: "https://automationteststore.com/",
    webdriveruni_url: "http://www.webdriveruniversity.com"
  },
  e2e: {
    //specPattern: 'cypress/e2e/**/*.{js}',
    //specPattern: 'cypress/e2e/BDD/*.feature',
    specPattern: 'cypress/e2e/**/*.js',
    excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*'],
    setupNodeEvents,
  },

});