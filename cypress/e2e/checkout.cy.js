import user from "../fixtures/user.json";
import { basketSelectors, mainPageSelectors } from "../support/selectors.js";

import { LoginPage } from "../support/pageObjects/loginObjects.js";
import { MainPage } from "../support/pageObjects/mainPageObjects.js";
import { ProductsPage } from "../support/pageObjects/productPageObject.js";
import { BasketPage } from "../support/pageObjects/basketPageObjects.js";

//addictional data

describe("Login funcionality", () => {
  it("POSITIVE: User should login after give a proper credentials and be able to purchase product from different categories", () => {
    //checking proper login
    MainPage.visitMainPage();

    MainPage.clickLoginOrRegisterButton();
    LoginPage.fillLoginInputs(user.userName, user.userValidPassword);
    LoginPage.clickLoginButton();
    //LoginPage.assertUserValidCredentials();

    // //first product add to cart
    ProductsPage.clickCategoryFromTopMenu("MAKEUP");
    ProductsPage.clickSubcategoryFromCategoryPage("lips");
    ProductsPage.clickProductFromSubcategoryPage("Viva Glam Lipstick");
    ProductsPage.clickAddToCartButton();

    // //second product add to cart - quantity:3
    ProductsPage.clickCategoryFromTopMenu("Fragrance");
    ProductsPage.clickSubcategoryFromCategoryPage("men");
    ProductsPage.clickProductFromSubcategoryPage("ck one shock");
    ProductsPage.changeQuantityOfProduct(3);
    ProductsPage.clickAddToCartButton();

    //third product add to cart - choose variant
    ProductsPage.clickCategoryFromTopMenu("Apparel");
    ProductsPage.clickSubcategoryFromCategoryPage("shoes");
    ProductsPage.clickProductFromSubcategoryPage("Ruby Shoo Womens Jada T-Bar");
    ProductsPage.changePropertyOfProductShoeSize("UK 5 / Red");
    ProductsPage.clickAddToCartButton();

    //go to basket
    BasketPage.visitBasketPage();

    //check basket quantity
    BasketPage.checkBasketProductQuantity(
      "#cart_quantity59440e65f322af942e2214c72e03177c2b",
      "1",
      "Viva Glam Lipstick"
    );
    BasketPage.checkBasketProductQuantity(
      "#cart_quantity62",
      "3",
      "ck one shock for him Deodorant"
    );

    BasketPage.checkBasketProductQuantity(
      "#cart_quantity117e9ed96c3dd0c5ce2d977987cdc61511b",
      "1",
      "Ruby Shoo Womens Jada T-Bar"
    );

    //checkout
    BasketPage.clickCheckoutButton();
    BasketPage.clickConfirmOrder();
    // chceck modal with return policy in case it will show
    cy.get("body").then((body) => {
      if (body.find("#returnPolicyModalLabel").length > 0) {
        cy.get(".modal-footer > .btn").should("be.visible").click();
      }
    });

    BasketPage.confirmOrder();
    BasketPage.assertCheckoutConfirmation();
  });
});
