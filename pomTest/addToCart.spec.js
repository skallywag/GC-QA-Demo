import { expect, test } from "@playwright/test";
import RegisterPage from "../Pages/registerPage";
import LoginPage from "../Pages/loginPage";
import ProductPage from "../Pages/productPage";
import HomePage from "../Pages/homePage";

// Save variables for reusablity
const email = "samburner666@redskytech.io";
const password = "llamas123";

test("Register test 1", async ({ page, baseURL }) => {
  const register = new RegisterPage(page);
  await page.goto(
    `https://ecommerce-playground.lambdatest.io/index.php?route=account/register`
  );
  await register.enterFirstName("skallywagg");
  await register.enterLastName("sparrow");
  await register.enterEmail(email);
  await register.enterPhone("12345678900");
  await register.enterPassword(password);
  await register.enterConfirmPassword(password);
  expect(await register.isSubscribedChecked()).toBeTruthy();
  await register.checkTermsAndConditions();
  await register.clickContinueButton();
  await page.waitForTimeout(5000);
});
