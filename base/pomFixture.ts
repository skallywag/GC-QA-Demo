import { test as baseTest } from "@playwright/test";
import HomePage from "../Pages/homePage";
import LoginPage from "../Pages/loginPage";
import ProductPage from "../Pages/productPage";
import RegisterPage from "../Pages/registerPage";
import { use } from "../playwright.config";

type pages = {
  registerPage: RegisterPage;
  loginPage: LoginPage;
  homePage: HomePage;
  productPage: ProductPage;
};

const testPages = baseTest.extend<pages>({
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
});

export const test = testPages;
