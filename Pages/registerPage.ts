import { Page } from "@playwright/test";

export default class RegisterPage {
  constructor(public page: Page) {}

  async enterFirstName(firstName: string) {
    await this.page.locator("#input-firstname").type(firstName);
  }
  async enterLastName(lastName: string) {
    await this.page.locator("#input-lastname").type(lastName);
  }
  async enterEmail(email: string) {
    await this.page.locator("#input-email").type(email);
  }
  // Pass phone numbers as a string format
  async enterPhone(phone: string) {
    await this.page.locator("#input-telephone").type(phone);
  }

  async enterPassword(password: string) {
    await this.page.locator("#input-password").type(password);
  }
  async enterConfirmPassword(confirmPassword: string) {
    await this.page.locator("#input-confirm").type(confirmPassword);
  }

  async isSubscribedChecked() {
    // return this.page.locator("#input-newsletter-no");
    return this.page.locator("#input-newsletter-no").isChecked();
  }

  async checkTermsAndConditions() {
    await this.page
      .getByText("I have read and agree to the Privacy Policy")
      .check();
  }

  async clickContinueButton() {
    await Promise.all([
      // Waits until page loads enirely
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.click("input[value='Continue']"),
    ]);
  }
}
