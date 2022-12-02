// @ts-check
const { test, expect } = require("@playwright/test");

test("Join Now Route", async ({ page }) => {
  await page.goto("https://www.greencompassdev.com/");
  await page.getByRole("link", { name: "LOGIN" }).click();
  await page.getByRole("link", { name: "Join Now" }).click();
  await expect(page).toHaveURL(
    "https://www.greencompassdev.com/enrollment/become-an-associate"
  );
});
