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

test.skip("Interact with multiple tabs/windows", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );

  const [multiplePages] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#followboth"),
  ]);

  // Wait for pages to load
  await page.waitForLoadState();
  // Returns number of pages open
  const pages = multiplePages.context().pages();
  // console.log("number of tabs open", pages.length);
  pages.forEach((tab) => {
    console.log(tab.url());
  });

  // Can now access each page and perform actions
  await pages[1].locator("").fill("");

  //Loop to save page objects to variables
  let faceBookPage;
  for (let index = 0; index < pages.length; count++) {
    const url = pages[index].url();
    if (url === "https://www.facebook.com/Lambdatest/") {
      faceBookPage = pages[index];
    }
  }

  // Opening a single tab
  // const [newWindow] = await Promise.all([
  //   page.waitForEvent("popup"),
  //   page.click("'Follow On Twitter'"),
  // ]);
  // console.log(newWindow.url());
  // Can now use the new window object to perform actions in
  //ie: newWindow.locator("")
});

test.skip("Calendar Interactions", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );
  // Accepted format may be different than UI format
  // document.getElementById("").value to retrieve appected format
  let date = 1991 - 8 - 14;
  await page.locator("#birthday").fill(date);

  await page.waitForTimeout(3000);
});

test.skip("Download Files", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo"
  );
  await page.type("#textbox", "File download playwright test");
  await page.click("id=create");

  const download = await Promise.all([
    page.waitForEvent("download"),
    page.click("id=link-to-download"),
  ]);
  // Get the path of download.
  // Note: When test browser closes the downloaded files are deleted
  // const path = await download[0].path();
  // console.log(path);

  const fileName = download[0].suggestedFilename();
  download[0].saveAs(fileName);
});

test.only("Upload Files", async ({ page }) => {
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
  // await page.setInputFiles("input[type=file]", ["imgUpload/suns.jpeg"]);

  // Alternate way if element is masked using promis.all
  const uploadFiles = await Promise.all([
    page.waitForEvent("filechooser"),
    page.click("input[type=file]"),
  ]);

  await uploadFiles.setFiles(["Upload", "Multiple", "files"]);

  await page.waitForTimeout(3000);
});

// Page Object Model
