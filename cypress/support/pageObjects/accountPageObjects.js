import { loginSelectors } from "../selectors.js";

export class Account {
  logoutFromUserAccountBox() {
    cy.get(loginSelectors.userAccountBox)
      .find(loginSelectors.logoutLink) //.find('href="*account/logout"').click()
      .click();
  }

  assertUserAccountBoxIsVisible() {
    cy.get(loginSelectors.userAccountBox).should("be.visible");
  }
}

export const AccountPage = new Account();
