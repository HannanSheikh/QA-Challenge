import { test, expect } from "@playwright/test";
import testData from "../fixtures/testData.json";
import HomePage from "../Page object model/Homepage.spec";
import LoginPage from "../Page object model/Login.spec";
import SearchPage from "../Page object model/Searchpage.spec";
import ProductPage from "../Page object model/Productpage.spec";

test.describe("Product Tests", () => {
  let homePage;
  let loginPage;
  let searchPage;
  let productPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    searchPage = new SearchPage(page);
    productPage = new ProductPage(page);

    
    await homePage.goto();

    
    await loginPage.clickSignIn();
    await loginPage.enterEmail(testData.login.email);
    await loginPage.enterPassword(testData.login.password);
    await loginPage.clickLogin();

    
    await searchPage.enterSearchQuery(testData.searchQuery);
    await searchPage.clickSearchButton();

    // Click on the first product in the search results
    await searchPage.clickOnFirstProduct();
  });

  test("send product to a friend", async ({ page }) => {
    
    await productPage.clickSendToFriend();
    await productPage.enterFriendName(testData.friendDetails.friendName);
    await productPage.enterFriendEmail(testData.friendDetails.friendEmail);
    await productPage.clickSendButton();
  });
});
