import { loginSelectors } from "../selectors.js";

export class Login {
  fillLoginInputs(user, password) {
    cy.get(loginSelectors.inputLoginName).type(user);
    cy.get(loginSelectors.inputPassword).type(password, {
      log: false,
    });
  }

  clickLoginButton() {
    cy.get(loginSelectors.loginButton).click();
  }

  assertUserValidCredentials() {
    cy.get(loginSelectors.loginConfirmMaintext).should(
      "include.text",
      "My Account"
    );
  }

  assertUserInvalidCredentials() {
    cy.get(loginSelectors.loginAlert)
      .should("be.visible")
      .should("contain", "Error: Incorrect login or password provided.")
      .should("include.text", "Error"); //when I want to search part of the text
  }

  assertUserLogoutConfirmation() {
    cy.get(loginSelectors.confirmationOrder).should(
      "include.text",
      "Account Logout"
    );
  }
}

export const LoginPage = new Login();
