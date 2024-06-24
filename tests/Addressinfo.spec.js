const { test, expect } = require("@playwright/test");
import testData from "../fixtures/testData.json";
import LoginPage from "../Page object model/Login.spec";
import HomePage from "../Page object model/Homepage.spec";
import AddressInfoPage from "../Page object model/Addressinfo.spec";

test.describe("Address Info Tests", () => {
  let homePage;
  let loginPage;
  let addressInfoPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    addressInfoPage = new AddressInfoPage(page);

    await homePage.goto();

    await loginPage.clickSignIn();
    await loginPage.enterEmail(testData.login.email);
    await loginPage.enterPassword(testData.login.password);
    await loginPage.clickLogin();

    await addressInfoPage.clickButton();
  });

  test("fill address info", async ({ page }) => {
    await addressInfoPage.enterCompanyName(testData.info.company);
    await addressInfoPage.enterAddress1(testData.info.address1);
    await addressInfoPage.enterAddress2(testData.info.address2);
    await addressInfoPage.enterCity(testData.info.city);
    await addressInfoPage.selectState(testData.info.state);
    await addressInfoPage.enterZipCode(testData.info.zipCode);
    await addressInfoPage.selectCountry(testData.info.country);
    await addressInfoPage.enterHomePhone(testData.info.homePhone);
    await addressInfoPage.enterMobilePhone(testData.info.mobilePhone);
    await addressInfoPage.clickSaveButton();
  });
});
