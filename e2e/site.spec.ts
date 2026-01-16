import { test, expect } from "@playwright/test";

test.describe("BrazilBaby Site Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Collect console errors
    page.on("pageerror", (error) => {
      console.error("Page error:", error.message);
    });
  });

  test("page loads without crashing", async ({ page }) => {
    await page.goto("http://localhost:3000");

    // Wait for page to be fully loaded
    await page.waitForLoadState("networkidle");

    // Check that Hero section is visible
    await expect(page.locator("h1")).toBeVisible({ timeout: 10000 });
  });

  test("page refresh works without errors", async ({ page }) => {
    const errors: string[] = [];

    page.on("pageerror", (error) => {
      errors.push(error.message);
    });

    // Load page
    await page.goto("http://localhost:3000");
    await page.waitForLoadState("networkidle");
    await expect(page.locator("h1")).toBeVisible();

    // Refresh multiple times
    for (let i = 0; i < 3; i++) {
      await page.reload();
      await page.waitForLoadState("networkidle");
      await expect(page.locator("h1")).toBeVisible({ timeout: 10000 });
      await page.waitForTimeout(500);
    }

    // Check no errors
    expect(errors).toHaveLength(0);
  });

  test("scroll through entire page without errors", async ({ page }) => {
    const errors: string[] = [];

    page.on("pageerror", (error) => {
      errors.push(error.message);
    });

    await page.goto("http://localhost:3000");
    await page.waitForLoadState("networkidle");

    // Scroll through the page slowly
    const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
    const viewportHeight = await page.viewportSize()?.height || 800;

    for (let scrollPos = 0; scrollPos < scrollHeight; scrollPos += viewportHeight / 2) {
      await page.evaluate((pos) => window.scrollTo(0, pos), scrollPos);
      await page.waitForTimeout(300);
    }

    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    // Check no JavaScript errors occurred
    expect(errors).toHaveLength(0);
  });

  test("all sections are visible after scroll", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.waitForLoadState("networkidle");

    // Check Hero
    await expect(page.locator("h1")).toContainText("Гражданство Бразилии");

    // Scroll to Features
    await page.locator("#about").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(page.locator("#about h2")).toBeVisible();

    // Scroll to Roadmap
    await page.locator("#roadmap").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(page.locator("#roadmap h2")).toBeVisible();

    // Scroll to Pricing
    await page.locator("#pricing").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(page.locator("#pricing h2")).toBeVisible();

    // Scroll to Trust
    await page.locator("#trust").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(page.locator("#trust h2")).toBeVisible();

    // Scroll to FAQ
    await page.locator("#faq").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(page.locator("#faq h2")).toBeVisible();

    // Scroll to Contact
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(page.locator("#contact h2")).toBeVisible();
  });

  test("accordion FAQ works", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.locator("#faq").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Click first accordion trigger button
    const firstTrigger = page.locator('button[data-state="closed"]').first();
    await firstTrigger.click();
    await page.waitForTimeout(300);

    // Check it opened - look for expanded content
    await expect(page.locator('div[role="region"][data-state="open"]').first()).toBeVisible();
  });

  test("form inputs work", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Fill form
    await page.fill('input[placeholder="Ваше имя"]', "Тест");
    await page.fill('input[placeholder="Телефон или WhatsApp"]', "+7999999999");

    // Check values are set
    await expect(page.locator('input[placeholder="Ваше имя"]')).toHaveValue("Тест");
  });

  test("mobile menu works", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("http://localhost:3000");
    await page.waitForLoadState("networkidle");

    // Click hamburger menu
    await page.click('button[aria-label="Toggle menu"]');
    await page.waitForTimeout(300);

    // Check mobile menu is visible
    await expect(page.locator("nav.flex.flex-col")).toBeVisible();
  });
});
