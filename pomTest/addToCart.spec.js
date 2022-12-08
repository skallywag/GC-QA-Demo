import { expect, test } from "@playwright/test";
import RegisterPage from "../Pages/registerPage";
import LoginPage from "../Pages/loginPage";
import ProductPage from "../Pages/productPage";
import HomePage from "../Pages/homePage";

// Save variables for reusablity
const email = "samburner688666@redskytech.io";
const password = "llamas123";

test.describe("Page Object model demo", async () => {
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
    expect(register.isSubscribedChecked()).toBeTruthy();
    await register.checkTermsAndConditions();
    await register.clickContinueButton();
  });

  test.skip("Login Test", async ({ page, baseURL }) => {
    const login = new LoginPage(page);
    await page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );
    await login.enterEmail(email);
    await login.enterLoginPassword(password);
    await login.clickLoginButton();
    expect(await page.title()).toBe("My Account");
  });

  test("Add to cart test", async ({ page, baseURL }) => {
    const login = new LoginPage(page);
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    await page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );
    await login.login(email, password);
    await homePage.clickSpecialNavBar();
    await productPage.addFirstProductToCart();
    const isCartVisible = await productPage.isToastVisible();
    await expect(isCartVisible).toBeVisible();
  });
});
