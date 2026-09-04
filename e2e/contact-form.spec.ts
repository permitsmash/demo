import { expect, test, type Page } from "@playwright/test";

const CONTACT_API_PATTERN = /\/api\/contact$/;

async function mockContactApi(
  page: Page,
  response: { status: number; body?: Record<string, unknown> }
) {
  await page.route(CONTACT_API_PATTERN, async (route) => {
    const method = route.request().method();

    if (method === "OPTIONS") {
      await route.fulfill({
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
      return;
    }

    if (method === "POST") {
      await route.fulfill({
        status: response.status,
        contentType: "application/json",
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify(response.body ?? {}),
      });
      return;
    }

    await route.continue();
  });
}

test.describe("contact form", () => {
  test("submits the form and shows a success message", async ({ page }) => {
    await mockContactApi(page, { status: 200, body: { ok: true } });

    await page.goto("/contact");
    await expect(page.getByRole("heading", { name: "Send Us a Message" })).toBeVisible();

    await page.getByLabel("Full Name").fill("Jane Doe");
    await page.getByLabel("Email Address").fill("jane@example.com");
    await page.getByLabel("Phone Number").fill("7815551234");
    await page.getByLabel("Subject").selectOption("enrollment");
    await page.getByLabel("Your Message").fill("I would like to enroll my teen in driver's ed.");

    await page.getByRole("button", { name: "Send Message" }).click();

    await expect(page.getByRole("heading", { name: "Message sent!" })).toBeVisible({
      timeout: 15_000,
    });
    await expect(
      page.getByText("Thank you for reaching out. We'll get back to you soon.")
    ).toBeVisible();
  });

  test("shows an error message when the contact API fails", async ({ page }) => {
    await mockContactApi(page, { status: 500, body: { error: "Failed to send message" } });

    await page.goto("/contact");

    await page.getByLabel("Full Name").fill("Jane Doe");
    await page.getByLabel("Email Address").fill("jane@example.com");
    await page.getByLabel("Phone Number").fill("7815551234");
    await page.getByLabel("Subject").selectOption("other");
    await page.getByLabel("Your Message").fill("Testing error handling.");

    await page.getByRole("button", { name: "Send Message" }).click();

    await expect(page.locator("form p[role='alert']")).toHaveText(
      "We couldn't send your message. Please try again or call us directly."
    );
    await expect(page.getByRole("button", { name: "Send Message" })).toBeEnabled();
  });

  test("shows a validation error for an invalid email address", async ({ page }) => {
    await page.goto("/contact");

    await page.getByLabel("Full Name").fill("Jane Doe");
    await page.getByLabel("Email Address").fill("not-an-email");
    await page.getByLabel("Phone Number").fill("7815551234");
    await page.getByLabel("Subject").selectOption("parent");
    await page.getByLabel("Your Message").fill("Please contact me.");

    await page.getByRole("button", { name: "Send Message" }).click();

    await expect(page.locator("form p[role='alert']")).toHaveText(
      "Please enter a valid email address."
    );
    await expect(page.getByRole("heading", { name: "Send Us a Message" })).toBeVisible();
  });
});
