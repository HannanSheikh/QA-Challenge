import { test, expect } from "@playwright/test";
import HomePage from "../Page object model/Homepage.spec";
import CreateAccountPage from "../Page object model/RegistrationPage.spec";
import testData from "../fixtures/testData.json"; //
test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
});

function generateUniqueEmail(baseEmail) {
  const uniqueSuffix = Date.now(); // You can use a more complex unique string if needed
  const emailParts = baseEmail.split('@');
  return `${emailParts[0]}+${uniqueSuffix}@${emailParts[1]}`;
}

test("Create Account using fixture data", async ({ page }) => {
  const baseEmail = 'test@example.com';
  const uniqueEmail = generateUniqueEmail(baseEmail);
  const createAccountPage = new CreateAccountPage(page);

  await createAccountPage.clickSignIn();

  await createAccountPage.enterEmail(uniqueEmail);
  await createAccountPage.clickCreateAccount();
  // await createAccountPage.selectGender(); // Assuming 1 for male and 2 for female
  await createAccountPage.enterFirstName(testData.user.firstName);
  await createAccountPage.enterLastName(testData.user.lastName);
  await createAccountPage.enterPassword(testData.user.password);
  await createAccountPage.selectDateOfBirth(
    testData.user.dayOfBirth,
    testData.user.monthOfBirth,
    testData.user.yearOfBirth
  );
  await createAccountPage.selectGender();
  await createAccountPage.clickRegister();
});
