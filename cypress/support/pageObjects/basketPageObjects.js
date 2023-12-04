import { productSelectors, basketSelectors } from "../selectors.js";

export class Basket {
  visitBasketPage() {
    cy.visit("/index.php?rt=checkout/cart");
  }

  checkBasketProductQuantity(productQuantity, value, productName) {
    cy.get(productQuantity)
      .should("have.value", value)
      .parent()
      .parent()
      .parent()
      .contains(productName);
  }

  clickCheckoutButton() {
    cy.get(basketSelectors.checkoutCartButton1).click();
  }

  clickConfirmOrder() {
    cy.contains("Confirm Order", { matchCase: false, force: true }).click();
  }

  confirmOrder() {
    cy.get(basketSelectors.confirmOrderButton).should("be.visible").click();
  }

  assertCheckoutConfirmation() {
    cy.get(basketSelectors.confirmationOrder).should(
      "include.text",
      "Your Order Has Been Processed!"
    );
  }
}

export const BasketPage = new Basket();
