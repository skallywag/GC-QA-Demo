// @ts-check
const { test, expect } = require("@playwright/test");

test("Invalid login credentials", async ({ page }) => {
  await page.goto("https://www.greencompassdev.com/account/login");

  await page.locator("#LoginName").fill("redskytamara");
  await page.locator("#Password").fill("12346");

  await page.getByRole("button", { name: "Login" }).hover();

  await page.getByRole("button", { name: "Login" }).click();
  let loginMessage = page.locator("#loginTextContainer");
  await expect(loginMessage).toHaveText(
    "Oops! It looks like the username and password combination doesn’t match up with any records in our system. Please try again with a different combination."
  );
});

test("Valid Login Credentials", async ({ page }) => {
  await page.goto("https://www.greencompassdev.com/account/login");

  await page.locator("#LoginName").fill("redskytamara");
  await page.locator("#Password").fill("123456");

  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL(
    "https://www.greencompassdev.com/account/settings"
  );
  await page.goBack();
  await page.goto("https://www.greencompassdev.com/orders");
});

test("Join Now Route", async ({ page }) => {
  await page.goto("https://www.greencompassdev.com/");
  await page.getByRole("link", { name: "LGIN" }).click();
  await page.getByRole("link", { name: "Join Now" }).click();
  await expect(page).toHaveURL(
    "https://www.greencompassdev.com/enrollment/become-an-associate"
  );
});
