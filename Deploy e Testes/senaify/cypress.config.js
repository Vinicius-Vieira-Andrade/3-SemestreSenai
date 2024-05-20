const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8081",
    viewportWidth: 414,
    viewportHeight: 896,
    testIsolation: false, // por padrao ele sempre recarrega quando tem o IT la no arquivo 'app.cy.js', deixando false ele n deixa que recarregue e sim pede para que continue
    reactNativeHotReload: true,
  },
});
