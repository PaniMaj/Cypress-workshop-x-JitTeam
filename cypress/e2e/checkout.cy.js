import user from "../fixtures/user.json";

import { loginPage } from "../support/pageObjects/loginObjects.js";
import { mainPage } from "../support/pageObjects/mainPageObjects.js";
import { productsPage } from "../support/pageObjects/productPageObject.js";
import { cartPage } from "../support/pageObjects/cartPageObjects.js";

describe("Purchase funcionality", () => {
  it("POSITIVE: User should login after give a proper credentials and be able to purchase product from different categories", () => {
    mainPage.visitMainPage();
    mainPage.clickLoginOrRegisterButton();

    loginPage.fillLoginInputs(user.userName, user.userValidPassword);
    loginPage.clickLoginButton();

    productsPage.clickCategoryFromTopMenu("MAKEUP");
    productsPage.clickSubcategoryFromCategoryPage("lips");
    productsPage.clickProductFromSubcategoryPage("Viva Glam Lipstick");
    productsPage.clickAddToCartButton();

    productsPage.clickCategoryFromTopMenu("Fragrance");
    productsPage.clickSubcategoryFromCategoryPage("men");
    productsPage.clickProductFromSubcategoryPage("ck one shock");
    productsPage.changeQuantityOfProduct(3);
    productsPage.clickAddToCartButton();

    productsPage.clickCategoryFromTopMenu("Apparel");
    productsPage.clickSubcategoryFromCategoryPage("shoes");
    productsPage.clickProductFromSubcategoryPage("Ruby Shoo Womens Jada T-Bar");
    productsPage.changePropertyOfProductShoeSize("UK 5 / Red");
    productsPage.clickAddToCartButton();

    cartPage.visitCartPage();

    cartPage.checkCartProductQuantity(
      "#cart_quantity59440e65f322af942e2214c72e03177c2b",
      "1",
      "Viva Glam Lipstick"
    );
    cartPage.checkCartProductQuantity(
      "#cart_quantity62",
      "3",
      "ck one shock for him Deodorant"
    );

    cartPage.checkCartProductQuantity(
      "#cart_quantity117e9ed96c3dd0c5ce2d977987cdc61511b",
      "1",
      "Ruby Shoo Womens Jada T-Bar"
    );

    cartPage.clickCheckoutButton();
    cartPage.clickConfirmOrder();

    cartPage.checkCartCheckoutModal();

    cartPage.confirmOrder();
    cartPage.assertCheckoutConfirmation();
  });
});
