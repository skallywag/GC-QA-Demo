const { test, expect } = require("@playwright/test");

test.skip("Login and inputs", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.getByRole("button", { name: " My account" }).hover();
  await page.getByRole("button", { name: " My account" }).click();
  await page.getByRole("link", { name: "Login" }).click();

  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
  );

  await page.locator("#input-email").fill("sam@redskytech.io");
  await page.locator("#input-password").fill("123456");
  await page.getByRole("button", { name: "Login" }).click();

  await page.waitForTimeout(5000);
});

test.skip("Single Checkbox", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  const singleCheckBox = await page.locator("#isAgeSelected");
  expect(singleCheckBox).not.toBeChecked();
  await singleCheckBox.click();
  expect(singleCheckBox).toBeChecked();

  await page.waitForTimeout(5000);
});

test.skip("Multiple Checkbox", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );

  const option1 = page.locator("#ex1-check1");
  await expect(option1).not.toBeChecked();

  const option2 = page.locator("#ex1-check2");
  await expect(option2).not.toBeChecked();

  const checkAllBtn = await page.locator("#box");
  checkAllBtn.click();
  await expect(checkAllBtn).toHaveText("uncheck all");
  await expect(option1).toBeChecked();
  await expect(option2).toBeChecked();
  checkAllBtn.click();
  await expect(checkAllBtn).toHaveText("check all");
  await expect(option1).not.toBeChecked();
  await expect(option2).not.toBeChecked();

  await page.waitForTimeout(3000);
});

test.skip("Popups", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo"
  );
  const modalBtn = await page.locator("//button[@data-target='#myModal']");
  modalBtn.click();

  let popup = await page.locator("(//div[@class='modal-content'])[1]");
  expect(popup).toContainText("Modal Title");

  // await page.getByRole("button", { name: "Launch Modal" }).first().click();
  // await page.getByRole("button", { name: "Save Changes" }).hover();
  await page.getByRole("button", { name: "Save Changes" }).click();
  // const popupTest = await page.locator("#myModal");
  await page.getByRole("button", { name: "Launch Modal" }).first().click();

  await page.getByRole("button", { name: "Close" }).click();

  // await page.waitForTimeout(3000);
});

test.skip("Single Select Drop Down", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );

  // Select by option label
  await page.selectOption("#select-demo", {
    label: "Tuesday",
  });
  // Select by option value
  await page.selectOption("#select-demo", {
    value: "Monday",
  });
  // Select by option index
  await page.selectOption("#select-demo", {
    index: 0,
  });

  await page.waitForTimeout(3000);
});

test.skip("Multiple Select Drop Down", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );

  // Selecting multiple options
  await page.selectOption("#multi-select", [
    {
      label: "Texas",
    },
    {
      value: "Ohio",
    },
    {
      index: 3,
    },
  ]);

  await page.waitForTimeout(5000);
});

test.skip("Search input drop down", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
  );
  // Convert to a function
  await selectCountry("India");
  await selectCountry("Denmark");

  // await page.waitForTimeout(3000);

  async function selectCountry(countryName) {
    await page.click("#country+span");
    await page
      .locator("ul#select2-country-results", {
        has: page.locator("li", {
          hasText: countryName,
        }),
      })
      .click();
  }
});

test.skip("Iframe Interactions", async ({ page }) => {
  await page.goto("");
  await page.waitForTimeout(5000);
});

test.only("Interact with multiple tabs/windows", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );

  const [newWindow] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("'Follow On Twitter'"),
  ]);

  console.log(newWindow.url());
  // Can now use the new window object to perform actions in
  //ie: newWindow.locator("")
});
