import { test, expect } from "@playwright/test";

export default class ContactUsPage {
  constructor(page) {
    this.page = page;
  }

  async clickContactUs() {
    await this.page.click('//*[@id="contact-link"]/a');
    await this.page.waitForSelector("select#id_contact"); // Wait for subject dropdown to appear
  }

  async selectSubjectHeading(subject) {
    const subjectDropdown = await this.page.$("select#id_contact");
    if (!subjectDropdown) {
      throw new Error("Subject dropdown not found");
    }
    await subjectDropdown.selectOption({ label: subject });
  }

  async enterMessage(message) {
    const messageField = await this.page.waitForSelector('//*[@id="message"]');
    await messageField.click();
    await messageField.fill(message);
  }

  async clickSendMessage() {
    const sendButton = await this.page.waitForSelector(
      '//*[@id="submitMessage"]'
    );
    await Promise.all([
      this.page.waitForNavigation(), // Wait for navigation
      sendButton.click(),
    ]);
  }
}
