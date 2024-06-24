class AddressInfoPage {
  constructor(page) {
    this.page = page;
  }

  async clickButton() {
    const buttonLocator = "//*[@id='center_column']/div/div/ul/li[1]/a";
    await this.page.click(buttonLocator);
  }

  async enterCompanyName(companyName) {
    const companyNameInput = "input[id='company']";
    await this.page.click(companyNameInput);
    await this.page.fill(companyNameInput, companyName);
  }

  async enterAddress1(address1) {
    const address1Input = "input[id='address1']";
    await this.page.click(address1Input);
    await this.page.fill(address1Input, address1);
  }

  async enterAddress2(address2) {
    const address2Input = "input[id='address2']";
    await this.page.click(address2Input);
    await this.page.fill(address2Input, address2);
  }

  async enterCity(city) {
    const cityInput = "input[id='city']";
    await this.page.click(cityInput);
    await this.page.fill(cityInput, city);
  }

  async selectState(state) {
    const stateSelect = "select[id='id_state']";
    await this.page.waitForSelector(stateSelect, { state: "visible" });
    await this.page.selectOption(stateSelect, { label: state });
  }

  async enterZipCode(zipCode) {
    const zipCodeInput = "input[id='postcode']";
    await this.page.click(zipCodeInput);
    await this.page.fill(zipCodeInput, zipCode);
  }

  async selectCountry(country) {
    const countrySelect = "select[id='id_country']";
    await this.page.selectOption(countrySelect, country);
  }

  async enterHomePhone(homePhone) {
    const homePhoneInput = "input[id='phone']";
    await this.page.click(homePhoneInput);
    await this.page.fill(homePhoneInput, homePhone);
  }

  async enterMobilePhone(mobilePhone) {
    const mobilePhoneInput = "input[id='phone_mobile']";
    await this.page.click(mobilePhoneInput);
    await this.page.fill(mobilePhoneInput, mobilePhone);
  }

  async clickSaveButton() {
    const saveButton = "button[id='submitAddress']";
    await this.page.click(saveButton);
  }
}

module.exports = AddressInfoPage;
