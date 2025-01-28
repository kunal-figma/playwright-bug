const { chromium } = require('playwright'); // or 'firefox' or 'webkit'
const fs = require('fs');

(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();

  // Route requests based on the HAR file
  await context.routeFromHAR('assets.har', { update: false, url: new RegExp(".*") });

  // Create a new page
  const page = await context.newPage();

  // Navigate to the local server
  await page.goto('http://localhost:9000/index.html');

  // Add any additional actions you want to perform here

  // Close the browser after you're done
  // await browser.close();
})();
