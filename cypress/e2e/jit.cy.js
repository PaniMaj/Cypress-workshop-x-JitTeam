import user from "../fixtures/user.json";
//require("dotenv").config();
import { LoginPage } from "../support/pageObjects/loginObjects.js";
import { MainPage } from "../support/pageObjects/mainPageObjects.js";
import { AccountPage } from "../support/pageObjects/accountPageObjects.js";

describe("Login funcionality", () => {
  beforeEach(() => {
    MainPage.visitMainPage();
    MainPage.clickLoginOrRegisterButton();
  });

  it("POSITIVE: User should login after give a proper credentials", () => {
    LoginPage.fillLoginInputs(user.userName, user.userValidPassword);
    LoginPage.clickLoginButton();
    LoginPage.assertUserValidCredentials();
  });

  it("NEGATIVE: User should not login after give a wrong credentials", () => {
    LoginPage.fillLoginInputs(user.userName, user.userInvalidPassword);
    LoginPage.clickLoginButton();
    LoginPage.assertUserInvalidCredentials;
  });

  it("POSITIVE: User should login and log out after give a proper credentials", () => {
    LoginPage.fillLoginInputs(user.userName, user.userValidPassword);
    LoginPage.clickLoginButton();

    AccountPage.assertUserAccountBoxIsVisible();

    AccountPage.logoutFromUserAccountBox();
    LoginPage.assertUserLogoutConfirmation();
  });
});

// id #
// class .
