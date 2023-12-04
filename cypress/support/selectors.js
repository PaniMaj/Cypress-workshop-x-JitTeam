export const mainPageSelectors = {
  buttonLoginOrRegister: "#customer_menu_top",
  topMenu: ".subnav",
  categoryMenu: ".categorymenu",
  linkToBasket: '[href="*checkout/cart"]',
};

export const loginSelectors = {
  inputLoginName: "#loginFrm_loginname",
  inputPassword: "#loginFrm_password",
  loginButton: '[title="Login"]',
  loginAlert: ".alert",
  loginConfirmMaintext: ".maintext",
  userAccountBox: ".myaccountbox",
  logoutLink:
    '[href="https://automationteststore.com/index.php?rt=account/logout"]',
};

export const productSelectors = {
  contentPage: ".contentpanel",
  productQuantity: "#product_quantity",
  productPropertyShoeSize: "#option346",
  addProductToBasketButton: ".productcart",
};

export const basketSelectors = {
  checkoutCartButton1: "#cart_checkout1",
  confirmOrderButton: "#checkout_btn",
  confirmationOrder: ".maintext",
};

// class -> .class_name
// id -> #id_name
