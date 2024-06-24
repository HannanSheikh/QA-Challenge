class CreateAccountPage {
  constructor(page) {
    this.page = page;
  }

  async clickSignIn() {
    await this.page.click("//div[@class='header_user_info']/a");
  }

  async enterEmail(email) {
    await this.page.click('//*[@id="email_create"]');
    await this.page.fill('//*[@id="email_create"]', email);
  }

  async clickCreateAccount() {
    await this.page.click('//*[@id="SubmitCreate"]');
    await new Promise((resolve) => setTimeout(resolve, 4000));
  }

  async selectGender() {
    await this.page.click('//*[@id="id_gender1"]');
  }

  async enterFirstName(firstName) {
    await this.page.click('//*[@id="customer_firstname"]');
    await this.page.fill('//*[@id="customer_firstname"]', firstName);
    await new Promise((resolve) => setTimeout(resolve, 4000));
  }

  async enterLastName(lastName) {
    await this.page.click('//*[@id="customer_lastname"]');
    await this.page.fill('//*[@id="customer_lastname"]', lastName);
    await new Promise((resolve) => setTimeout(resolve, 4000));
  }

  async enterPassword(password) {
    await this.page.fill('//*[@id="passwd"]', password);
  }

  async selectDateOfBirth(day, month, year) {
    await this.page.selectOption('//*[@id="days"]', day);
    await this.page.selectOption('//*[@id="months"]', month);
    await this.page.selectOption('//*[@id="years"]', year);
  }

  async clickRegister() {
    await this.page.click('//*[@id="submitAccount"]');
  }
  
}

module.exports = CreateAccountPage;
