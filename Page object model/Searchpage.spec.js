class SearchPage {
  constructor(page) {
    this.page = page;
  }

  async enterSearchQuery(query) {
    const searchInput = "input[id='search_query_top']";
    await this.page.click(searchInput);
    await this.page.fill(searchInput, query);
  }

  async clickSearchButton() {
    const searchButton = "button[name='submit_search']";
    await this.page.click(searchButton);
  }

  async clickOnFirstProduct() {
    const productLink = "//*[@id='center_column']/ul/li[1]/div/div[2]/h5/a";
    await this.page.click(productLink);
  }
}

module.exports = SearchPage;
