import { test, expect } from "@playwright/test";
import testData from "../fixtures/testData.json";
import HomePage from "../Page object model/Homepage.spec";
import LoginPage from "../Page object model/Login.spec";
import ContactUsPage from "../Page object model/Contactuspage.spec";

test.describe("Contact Us Tests", () => {
  let homePage;
  let loginPage;
  let contactUsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    contactUsPage = new ContactUsPage(page);

    await homePage.goto();

    await loginPage.clickSignIn();
    await loginPage.enterEmail(testData.login.email);
    await loginPage.enterPassword(testData.login.password);
    await loginPage.clickLogin();

    await contactUsPage.clickContactUs();
  });

  test("send message via contact form", async ({ page }) => {
    await contactUsPage.selectSubjectHeading(testData.contactMessage.subject);

    await contactUsPage.enterMessage(testData.contactMessage.message);

    await contactUsPage.clickSendMessage();

    const successMessage = await page.locator(".alert.alert-success");
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toHaveText(
      "Your message has been successfully sent to our team."
    );
  });
});
