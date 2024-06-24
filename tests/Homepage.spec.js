import { test, expect } from "@playwright/test";
import HomePage from "../Page object model/Homepage.spec"; // Adjust the path as necessary

test("Navigate to the home page and verify the title", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await new Promise((resolve) => setTimeout(resolve, 4000));
});
