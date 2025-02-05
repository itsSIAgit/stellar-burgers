import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1300,
    viewportHeight: 1000,
    baseUrl: 'http://localhost:4000'
  },
});
