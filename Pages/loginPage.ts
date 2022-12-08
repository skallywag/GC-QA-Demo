import { Page } from "@playwright/test";

export default class LoginPage {
  constructor(public page: Page) {}

  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterLoginPassword(password);
    await this.clickLoginButton();
  }

  async enterEmail(email: string) {
    await this.page.locator("input[name='email']").type(email);
  }
  async enterLoginPassword(password: string) {
    await this.page.locator("input[name='password']").type(password);
  }

  async clickLoginButton() {
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.getByRole("button", { name: "Login" }).click(),
    ]);
  }
}
