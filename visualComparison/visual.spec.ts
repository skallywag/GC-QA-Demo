// example.spec.ts
import { test, expect } from "@playwright/test";

test("Visual test demo", async ({ page }) => {
  await page.goto("https://www.greencompassdev.com/enrollment/join");

  await expect(
    page.getByText(
      "Empower yourself. Build community. Be the catalyst to change. CBD didn’t just ch"
    )
  ).toMatchSnapshot("./visual.spec.ts-snapshots/Empower Block_Desktop (1).png");

  //   await page.goto("https://playwright.dev");
  //   await expect(page).toHaveScreenshot(
  //     "./visual.spec.ts-snapshots/Empower Block_Desktop (1).png"
  //   );
});
