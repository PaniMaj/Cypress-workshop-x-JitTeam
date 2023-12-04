import { productSelectors, mainPageSelectors } from "../selectors.js";

export class Products {
  clickCategoryFromTopMenu(categoryName) {
    cy.get(mainPageSelectors.topMenu)
      .contains(categoryName, { matchCase: false })
      .trigger("mouseover")
      .click();
  }

  clickSubcategoryFromCategoryPage(subcategoryName) {
    cy.get(productSelectors.contentPage)
      .contains(subcategoryName, { matchCase: false })
      .click();
  }

  clickProductFromSubcategoryPage(productName) {
    cy.get(productSelectors.contentPage)
      .contains(productName, { matchCase: false })
      .click();
  }

  changeQuantityOfProduct(quantity) {
    cy.get(productSelectors.productQuantity).click().clear().type(quantity);
  }

  changePropertyOfProductShoeSize(shoeSize) {
    cy.get(productSelectors.productPropertyShoeSize).select(shoeSize);
  }

  clickAddToCartButton() {
    cy.contains("Add to Cart").click();
    //cy.get(productSelectors.addProductToBasketButton);
  }
}

export const ProductsPage = new Products();
