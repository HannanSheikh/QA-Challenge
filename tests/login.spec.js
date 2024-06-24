const { test, expect } = require("@playwright/test");
import testData from "../fixtures/testData.json";
import LoginPage from "../Page object model/Login.spec";
import HomePage from "../Page object model/Homepage.spec";

test.describe("My Shop Tests", () => {
  let homePage;
  let loginPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);

    await homePage.goto();

    await loginPage.clickSignIn();
    await loginPage.enterEmail(testData.login.email);
    await loginPage.enterPassword(testData.login.password);
    await loginPage.clickLogin();
  });

  test("example test", async ({ page }) => {
    const womenLink = page.locator('#block_top_menu a[title="Women"]');
    await expect(womenLink).toBeVisible();
  });
});
