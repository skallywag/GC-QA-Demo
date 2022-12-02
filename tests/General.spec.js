const { test, expect } = require("@playwright/test");

test.skip("Instagram image links", async ({ page }) => {
  await page.goto("https://www.greencompassdev.com");
});
