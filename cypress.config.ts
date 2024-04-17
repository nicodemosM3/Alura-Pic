import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      { "reporter"; "mochawesome", 
        "reporterOptions"; 
          { "reportDir"; "cypress/report/mochawesome-report", 
           "overwrite"; true, 
           "html"; true, 
           "json"; false, 
           "timestamp"; "mmddyyyy_HHMMss" }}
    },
  },
});

    },
  },
});
