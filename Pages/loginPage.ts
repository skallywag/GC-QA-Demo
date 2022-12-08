import { Page } from "@playwright/test";

export default class LoginPage {
  constructor(public page: Page) {}

  async enterEmail(email) {
    await this.page.locator("input[name='email']").type(email);
  }
  async enterLoginPassword(password) {
    await this.page.locator("input[name='password']").type(password);
  }

  async clickLoginButton() {
    await this.page.click("input[name='Login']");
  }
}
