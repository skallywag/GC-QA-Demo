import { Page } from "@playwright/test";

export default class HomePage {
  constructor(public page: Page) {}

  async clickSpecialNavBar() {
    await this.page.click("(//span[contains(text(), 'Special')]/../..)[2]");
  }
}
