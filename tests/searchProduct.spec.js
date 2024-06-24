import { test, expect } from "@playwright/test";
import testData from "../fixtures/testData.json";
import HomePage from "../Page object model/Homepage.spec";
import LoginPage from "../Page object model/Login.spec";
import SearchPage from "../Page object model/Searchpage.spec";

test.describe("Search Tests", () => {
  let homePage;
  let loginPage;
  let searchPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    searchPage = new SearchPage(page);

    await homePage.goto();

    await loginPage.clickSignIn();
    await loginPage.enterEmail(testData.login.email);
    await loginPage.enterPassword(testData.login.password);
    await loginPage.clickLogin();

    await searchPage.enterSearchQuery(testData.searchQuery);
    await searchPage.clickSearchButton();
  });

  test("search for a product and click on the first result", async ({
    page,
  }) => {
    await searchPage.clickOnFirstProduct();

    const productTitle = page.locator('h1[itemprop="name"]');
    const addToCartButton = page.locator('button[name="Submit"]');

    await expect(productTitle).toBeVisible();
    await expect(productTitle).toHaveText(/Dress/i);
  });
});
