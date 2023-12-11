import user from "../fixtures/user.json";
//require("dotenv").config();
import { loginPage } from "../support/pageObjects/loginObjects.js";
import { mainPage } from "../support/pageObjects/mainPageObjects.js";
import { accountPage } from "../support/pageObjects/accountPageObjects.js";

describe("Login funcionality", () => {
  beforeEach(() => {
    mainPage.visitMainPage();
    mainPage.clickLoginOrRegisterButton();
  });

  it("POSITIVE: User should login after give a proper credentials", () => {
    loginPage.fillLoginInputs(user.userName, user.userValidPassword);
    loginPage.clickLoginButton();
    loginPage.assertUserValidCredentials();
  });

  it("NEGATIVE: User should not login after give a wrong credentials", () => {
    loginPage.fillLoginInputs(user.userName, user.userInvalidPassword);
    loginPage.clickLoginButton();
    loginPage.assertUserInvalidCredentials;
  });

  it("POSITIVE: User should login and log out after give a proper credentials", () => {
    loginPage.fillLoginInputs(user.userName, user.userValidPassword);
    loginPage.clickLoginButton();

    accountPage.assertUserAccountBoxIsVisible();

    accountPage.logoutFromUserAccountBox();
    loginPage.assertUserLogoutConfirmation();
  });
});

// id #
// class .
