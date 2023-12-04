import { mainPageSelectors } from "../selectors.js";

export class Main {
  visitMainPage() {
    cy.visit("/");
  }
  clickLoginOrRegisterButton() {
    cy.get(mainPageSelectors.buttonLoginOrRegister).click();
    //cy.title().should("eq", "A place to practice your automation skills!");
  }
}

export const MainPage = new Main();
