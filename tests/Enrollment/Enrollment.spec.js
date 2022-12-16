const { test, expect, selectors } = require("@playwright/test");

test("Password strength", async ({ page }) => {
  await page.goto("https://www.greencompassdev.com/");

  await page
    .locator("#navbarCollapse")
    .getByRole("link", { name: "Join" })
    .click();

  await page
    .locator("#navbarCollapse")
    .getByRole("link", { name: "Join Now" })
    .click();

  await expect(page).toHaveURL(
    "https://www.greencompassdev.com/enrollment/become-an-associate"
  );

  const passwordInput = page.locator("#Password");
  const strengthBar = page.locator(
    "//div[@class='passwordStrengthBar']//div[1]"
  );

  await expect(strengthBar).toHaveClass("useless");
  await expect(strengthBar).toHaveCSS("width", "0px");
  await passwordInput.click();

  await passwordInput.type("a");
  console.log(await passwordInput.inputValue());
  await expect(strengthBar).toHaveClass("useless");
  await expect(strengthBar).toHaveCSS("width", "12.0938px");
  await expect(strengthBar).toHaveCSS("background-color", "rgb(255, 0, 0)");

  await passwordInput.type("bc");
  await expect(passwordInput).toHaveValue("abc");
  await expect(strengthBar).toHaveClass("weak");
  await expect(strengthBar).toHaveCSS("width", "36.2969px");
  await expect(strengthBar).toHaveCSS("background-color", "rgb(255, 165, 0)");

  await passwordInput.type("defgh");
  await expect(passwordInput).toHaveValue("abcdefgh");
  await expect(strengthBar).toHaveClass("strong");
  await expect(strengthBar).toHaveCSS("width", "242px");
  await expect(strengthBar).toHaveCSS("background-color", "rgb(50, 205, 50)");
});

test("Enrollment Step 1", async ({ page }) => {
  await page.goto("https://www.greencompassdev.com/");

  await page
    .locator("#navbarCollapse")
    .getByRole("link", { name: "Join" })
    .click();

  await page
    .locator("#navbarCollapse")
    .getByRole("link", { name: "Join Now" })
    .click();

  await expect(page).toHaveURL(
    "https://www.greencompassdev.com/enrollment/become-an-associate"
  );

  const enrollmentHeader = page.locator("[class=enrollment-header]");
  await expect(enrollmentHeader).toHaveText(
    "This is just the beginning. Become an Advocate in just 4 Easy Steps."
  );

  const enrollmentStep = page.locator("[class=join-breadcrumbs]");
  await expect(enrollmentStep).toHaveText("Step 1 of 4");
  await page.waitForTimeout(5000);

  // let noReferrerRadio = page.getByLabel("Sign up without referral");
  // await referrer.check();
  // await expect(noReferrerRadio).toBeChecked();
  // await page.locator("#submit-join-step-1").click();
  // await expect(page).toHaveURL(
  //   "https://www.greencompassdev.com/enrollment/associate-pack"
  // );
  // await expect(enrollmentHeader).toHaveText(
  //   "Great! Let’s begin your Wellness Journey. Please select the enrollment kit of your preference. You are joining with Master Account. Change Referrer"
  // );
  // await expect(enrollmentStep).toHaveText("Step 2 of 4");

  // await page.locator("//input[@value='COREKIT299']").check();
  // await expect(page.locator("//input[@value='COREKIT299']")).toBeChecked();
  // await page.locator("#submit-join-step-2").click();

  // await expect(page).toHaveURL(
  //   "https://www.greencompassdev.com/enrollment/associate-info"
  // );

  // await expect(enrollmentHeader).toHaveText(
  //   "Now let’s get to know you a little better. Please enter in your personal details to better serve you."
  // );
  // await expect(enrollmentStep).toHaveText("Step 3 of 4");
  // await expect(enrollmentStep).toHaveCSS("margin", "0px 0px 16px");
  // await page.locator("#submit-join-step-3").click();

  // await expect(page.locator("#Customer_FirstName-error")).toBeVisible();
  // await expect(
  //   page.locator("//span[@data-valmsg-for='Customer.LastName']")
  // ).toBeVisible();
  // await expect(page.locator("#Customer_BirthDate-error")).toBeVisible();
  // await expect(page.locator("#Customer_Email-error")).toBeVisible();
  // await expect(page.locator("#Customer_PrimaryPhone-error")).toBeVisible();
  // await expect(page.locator("#Customer_TaxID-error")).toBeVisible();
  // await expect(page.locator("#ShippingAddress_Address1-error")).toBeVisible();
  // await expect(page.locator("#ShippingAddress_City-error")).toBeVisible();
  // await expect(page.locator("#ShippingAddress_State-error")).toBeVisible();
  // await expect(page.locator("#ShippingAddress_Zip-error")).toBeVisible();
  // await expect(page.locator("#YourBusiness_WebAlias-error")).toBeVisible();
  // await expect(page.locator("#Card_NameOnCard-error")).toBeVisible();
  // await expect(page.locator("#Card_CVV-error")).toBeVisible();

  // await page.locator("#Customer_FirstName").click();
  // await page.getByLabel("First Name*").fill("ferris");
  // await page.getByLabel("Middle Name").click();
  // await page.getByLabel("Last Name*").click();
  // await page.getByLabel("Last Name*").fill("bueller");
  // await page.getByLabel("Date of Birth*").fill("1989-08-14");
  // await page.getByLabel("Email Address*").click();
  // await page.getByLabel("Email Address*").fill("burnermail@gmail.com");
  // await page.getByLabel("Home Phone*").click();
  // await page.getByLabel("Home Phone*").fill("385-981-5800");
  // await page.getByLabel("SSN/EIN*").click();
  // await page.getByLabel("SSN/EIN*").fill("126512342");
  // await page.getByRole("button", { name: "Country* United States" }).click();
  // await page.getByRole("option", { name: "United States" }).click();
  // await page.getByRole("textbox", { name: "Street Address*" }).click();
  // await page
  //   .getByRole("textbox", { name: "Street Address*" })
  //   .fill("12345 easy street");
  // await page.getByRole("textbox", { name: "City*" }).click();
  // await page.getByRole("textbox", { name: "City*" }).fill("easyville");
  // await page.getByRole("button", { name: "State*" }).click();
  // await page.getByRole("option", { name: "Arizona" }).click();
  // await page.getByRole("textbox", { name: "Zipcode*" }).click();
  // await page.getByRole("textbox", { name: "Zipcode*" }).fill("86314");
  // await page.getByLabel("Your Website*").click();
  // await page.getByLabel("Your Website*").fill("burner123");
  // await page.getByLabel("Username*").click();
  // await page.getByLabel("Username*").fill("skallywaggggg");
  // await page.locator("#YourBusiness_Password").click();
  // await page.locator("#YourBusiness_Password").fill("123456");
  // await page.getByLabel("Confirm Password*").click();
  // await page.getByLabel("Confirm Password*").fill("123456");
  // await page.getByLabel("Show my password").check();
  // await page
  //   .frameLocator("#tx_iframe_PaymentMethod_CardNumber")
  //   .getByLabel("Data")
  //   .click();
  // await page
  //   .frameLocator("#tx_iframe_PaymentMethod_CardNumber")
  //   .getByLabel("Data")
  //   .click();
  // await page
  //   .frameLocator("#tx_iframe_PaymentMethod_CardNumber")
  //   .getByLabel("Data")
  //   .fill("4111111111111111");
  // await page.getByLabel("Name on Card*").click();
  // await page.getByLabel("Name on Card*").fill("red");
  // await page.getByRole("button", { name: "Expiration Year* 2022" }).click();
  // await page.getByRole("option", { name: "2023" }).click();
  // await page.getByLabel("CVV*").click();
  // await page.getByLabel("CVV*").fill("454");

  // const billingCheckBox = page
  //   .locator("#BillingAddressSameAsShipping")
  //   .uncheck();
  // await expect(page.locator("#BillingAddressSameAsShipping")).not.toBeChecked();
  // await page.waitForTimeout(6000);
  // await expect(page.locator("#Card_BillingAddress_Address1")).not.toBeVisible();
  // await page.locator("#submit-join-step-3").click();
  // await expect(page).toHaveURL(
  //   "https://www.greencompassdev.com/enrollment/review"
  // );
  // await expect(headerText).toHaveText(
  //   "Welcome to Green Compass You are joining a community of wellness shifters and dream makers."
  // );
  // await expect(enrollmentStep).toHaveText("Step 4 of 4");
  // await expect(page.locator("[class=item-summary]")).toHaveText("Core Kit");
});
