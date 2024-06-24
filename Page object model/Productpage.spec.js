class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async clickSendToFriend() {
    const sendToFriendButton = "//*[@id='send_friend_button']";
    await this.page.click(sendToFriendButton);
  }

  async enterFriendName(friendName) {
    const friendNameInput = "//*[@id='friend_name']";
    await this.page.fill(friendNameInput, friendName);
  }

  async enterFriendEmail(friendEmail) {
    const friendEmailInput = "//*[@id='friend_email']";
    await this.page.fill(friendEmailInput, friendEmail);
  }

  async clickSendButton() {
    const sendButton = "//*[@id='sendEmail']";
    await this.page.click(sendButton);
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
}

module.exports = ProductPage;
