import { mainPageSelectors, loginSelectors } from "../support/selectors.js";
import user from "../fixtures/user.json";
//require("dotenv").config();

describe("Login funcionality", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(mainPageSelectors.buttonLoginOrRegister).click();
  });

  it("POSITIVE: User should login after give a proper credentials", () => {
    cy.get(loginSelectors.inputLoginName).type(user.userName);
    cy.get(loginSelectors.inputPassword).type(user.userValidPassword, {
      log: false,
    });
    cy.get(loginSelectors.loginButton).click();
    cy.get(loginSelectors.loginConfirmMaintext).should(
      "include.text",
      "My Account"
    );
  });

  it("NEGATIVE: User should not login after give a wrong credentials", () => {
    cy.get(loginSelectors.inputLoginName).type(user.userName);
    cy.get(loginSelectors.inputPassword).type(user.userInvalidPassword, {
      log: false,
    });
    cy.get(loginSelectors.loginButton).click();

    cy.get(loginSelectors.loginAlert)
      .should("be.visible")
      .should("contain", "Error: Incorrect login or password provided.")
      .should("include.text", "Error"); //when I want to search part of the text
  });

  it.only("POSITIVE: User should login and log out after give a proper credentials", () => {
    cy.get(loginSelectors.inputLoginName).type(user.userName);
    cy.get(loginSelectors.inputPassword).type(user.userValidPassword, {
      log: false,
    });
    cy.get(loginSelectors.loginButton).click();
    cy.get(loginSelectors.userAccountBox).should("be.visible");

    cy.get(loginSelectors.userAccountBox)
      .find(loginSelectors.logoutLink) //.find('href="*account/logout"').click()
      .click();
    cy.get(loginSelectors.loginConfirmMaintext).should(
      "include.text",
      "Account Logout"
    );
  });
});

// id #
// class .
