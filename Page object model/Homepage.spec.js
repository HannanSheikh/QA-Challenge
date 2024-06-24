const { expect } = require("@playwright/test");

class HomePage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("http://www.automationpractice.pl/index.php");
    await expect(this.page).toHaveTitle("My Shop");
  }
}

module.exports = HomePage;
