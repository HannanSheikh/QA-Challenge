class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async clickSignIn() {
    await this.page.click("//div[@class='header_user_info']/a");
  }

  async enterEmail(email) {
    await this.page.fill('//*[@id="email"]', email);
  }

  async enterPassword(password) {
    await this.page.fill('//*[@id="passwd"]', password);
  }

  async clickLogin() {
    await this.page.click('//*[@id="SubmitLogin"]');
  }
}

module.exports = LoginPage;
