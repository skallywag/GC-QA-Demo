const { test, expect } = require("@playwright/test");

test("User able to add a referrer", async ({ page }) => {
  await page.goto("https://www.greencompassdev.com/");
  await page.getByText("FIND YOUR REFERRER").click();
  await page.getByLabel("Search by ID, First Name, or Last Name").click();
  await page
    .getByLabel("Search by ID, First Name, or Last Name")
    .fill("redsky");
  await page.locator(".referrer__search-button").click();
  await page
    .locator(".referrer__search-result-text > a:nth-child(5)")
    .first()
    .click();
  await page.getByRole("button", { name: "View Your Referrer" }).click();
});
