const { test, expect } = require("@playwright/test");

// test.skip("test", async ({ page }) => {
//   await page.goto("https://www.greencompassglobal.com/account/login");
//   await page.getByLabel("Username*").click();
//   await page.getByLabel("Username*").fill("redskytamara");
//   await page.getByLabel("Password*").click();
//   await page.getByLabel("Password*").fill("123456");
//   await page.getByRole("button", { name: " Login" }).click();
//   let username = await page
//     .locator("#form0 div")
//     .filter({
//       hasText:
//         "Basic Information Name: Redsky Tamara, ID# 432008 Your Name Save Changes Cancel ",
//     })
//     .getByRole("button", { name: "Edit" })
//     .first()
//     .click();
// });

test("test", async ({ page }) => {
  await page.goto("https://www.greencompassglobal.com/account/login");
  await page.getByLabel("Username*").click();
  await page.getByLabel("Username*").fill("redskytamara");
  await page.getByLabel("Username*").press("Tab");
  await page.getByLabel("Password*").fill("123456");
  await page.getByLabel("Password*").press("Enter");
  await page
    .locator("#form0 div")
    .filter({
      hasText:
        "Basic Information Name: Redsky Tamara, ID# 432008 Your Name Save Changes Cancel ",
    })
    .getByRole("button", { name: "Edit" })
    .first()
    .click();
  await page.g;
  await page.getByRole("button", { name: "Cancel" }).click();
  await page
    .locator("#form0 div")
    .filter({
      hasText:
        "Basic Information Name: Redsky Tamara, ID# 432008 Your Name Save Changes Cancel ",
    })
    .getByRole("button", { name: "Edit" })
    .nth(1)
    .click();
  await page.getByRole("button", { name: "Cancel" }).click();
});
