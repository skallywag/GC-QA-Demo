const { test, expect, selectors } = require("@playwright/test");

test("Enrollment", async ({ page }) => {
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

  const headerText = page.locator("[class=enrollment-header]");
  await expect(headerText).toHaveText(
    "This is just the beginning. Become an Advocate in just 4 Easy Steps."
  );

  const enrollmentStep = page.locator("[class=join-breadcrumbs]");
  await expect(enrollmentStep).toHaveText("Step 1 of 4");

  let referrer = page.getByLabel("Sign up without referral");
  await referrer.check();
  await expect(referrer).toBeChecked();
  await page.locator("#submit-join-step-1").click();
  await expect(page).toHaveURL(
    "https://www.greencompassdev.com/enrollment/associate-pack"
  );
  await expect(headerText).toHaveText(
    "Great! Let’s begin your Wellness Journey. Please select the enrollment kit of your preference. You are joining with Master Account. Change Referrer"
  );
  await expect(enrollmentStep).toHaveText("Step 2 of 4");

  await page.locator("//input[@value='COREKIT299']").check();
  await expect(page.locator("//input[@value='COREKIT299']")).toBeChecked();
  await page.locator("#submit-join-step-2").click();

  await expect(page).toHaveURL(
    "https://www.greencompassdev.com/enrollment/associate-info"
  );

  await expect(headerText).toHaveText(
    "Now let’s get to know you a little better. Please enter in your personal details to better serve you."
  );
  await expect(enrollmentStep).toHaveText("Step 3 of 4");
  await expect(enrollmentStep).toHaveCSS("margin", "0px 0px 16px");

  // await page.getByLabel("First Name*").click();
  await page.locator("#Customer_FirstName").click();
  await page.getByLabel("First Name*").fill("ferris");
  await page.getByLabel("Middle Name").click();
  await page.getByLabel("Last Name*").click();
  await page.getByLabel("Last Name*").fill("bueller");
  await page.getByLabel("Date of Birth*").fill("1989-08-14");
  await page.getByLabel("Email Address*").click();
  await page.getByLabel("Email Address*").fill("burnermail@gmail.com");
  await page.getByLabel("Home Phone*").click();
  await page.getByLabel("Home Phone*").fill("385-981-5800");
  await page.getByLabel("SSN/EIN*").click();
  await page.getByLabel("SSN/EIN*").fill("126512342");
  await page.getByRole("button", { name: "Country* United States" }).click();
  await page.getByRole("option", { name: "United States" }).click();
  await page.getByRole("textbox", { name: "Street Address*" }).click();
  await page
    .getByRole("textbox", { name: "Street Address*" })
    .fill("12345 easy street");
  await page.getByRole("textbox", { name: "City*" }).click();
  await page.getByRole("textbox", { name: "City*" }).fill("easyville");
  await page.getByRole("button", { name: "State*" }).click();
  await page.getByRole("option", { name: "Arizona" }).click();
  await page.getByRole("textbox", { name: "Zipcode*" }).click();
  await page.getByRole("textbox", { name: "Zipcode*" }).fill("86314");
  await page.getByLabel("Your Website*").click();
  await page.getByLabel("Your Website*").fill("burner123");
  await page.getByLabel("Username*").click();
  await page.getByLabel("Username*").fill("skallywaggggg");
  await page.locator("#YourBusiness_Password").click();
  await page.locator("#YourBusiness_Password").fill("123456");
  await page.getByLabel("Confirm Password*").click();
  await page.getByLabel("Confirm Password*").fill("123456");
  await page.getByLabel("Show my password").check();
  await page
    .frameLocator("#tx_iframe_PaymentMethod_CardNumber")
    .getByLabel("Data")
    .click();
  await page
    .frameLocator("#tx_iframe_PaymentMethod_CardNumber")
    .getByLabel("Data")
    .click();
  await page
    .frameLocator("#tx_iframe_PaymentMethod_CardNumber")
    .getByLabel("Data")
    .fill("4111111111111111");
  await page.getByLabel("Name on Card*").click();
  await page.getByLabel("Name on Card*").fill("red");
  await page.getByRole("button", { name: "Expiration Year* 2022" }).click();
  await page.getByRole("option", { name: "2023" }).click();
  await page.getByLabel("CVV*").click();
  await page.getByLabel("CVV*").fill("454");
  await page.locator("#submit-join-step-3").click();
  await page.waitForTimeout(5000);
});
