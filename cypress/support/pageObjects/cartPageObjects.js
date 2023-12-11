import { cartSelectors } from "../selectors.js";

export class Cart {
  visitCartPage() {
    cy.visit("/index.php?rt=checkout/cart");
  }

  checkCartProductQuantity(productQuantity, value, productName) {
    cy.get(productQuantity)
      .should("have.value", value)
      .parent()
      .parent()
      .parent()
      .contains(productName);
  }

  clickCheckoutButton() {
    cy.get(cartSelectors.checkoutCartButton1).click();
  }

  clickConfirmOrder() {
    cy.contains("Confirm Order", { matchCase: false, force: true }).click();
  }

  confirmOrder() {
    cy.get(cartSelectors.confirmOrderButton).should("be.visible").click();
  }

  assertCheckoutConfirmation() {
    cy.get(cartSelectors.confirmationOrder).should(
      "include.text",
      "Your Order Has Been Processed!"
    );
  }

  checkCartCheckoutModal() {
    cy.get("body").then((body) => {
      if (body.find(cartSelectors.modalLabel).length > 0) {
        cy.get(cartSelectors.modalButton).should("be.visible").click();
      }
    });
  }
}

export const cartPage = new Cart();
