import { LoginPage } from "../page-objects/loginPage.js";
import { ArticlePage } from "../page-objects/articlePage";

let validUser, invalidUser;

describe("Login tests", () => {
  beforeEach(function () {
    cy.fixture("users").then((users) => {
      validUser = users.valid;
      invalidUser = users.invalid;
    });
    LoginPage.visit();
  });

  describe("Logo and Title", () => {
    it("Should have logo", () => {
      LoginPage.logo().should("be.visible");
    });

    it("Should have top Nav bar on page", () => {
      LoginPage.navBar().should("be.visible");
    });

    it("Should have Sign In header on page", () => {
      LoginPage.signInHeader()
        .should("be.visible")
        .should("have.text", "Sign inNeed an account?");
    });
  });

  describe("Login Form", () => {
    it("Should have login form on page", () => {
      LoginPage.loginForm().should("be.visible");
    });

    it("'Need an account' link should have href link", () => {
      LoginPage.needAnAccountLink()
        .should("have.attr", "href")
        .and("include", "register");
    });

    it("Should display error message for invalid user", () => {
      LoginPage.fillEmail(invalidUser.email);
      LoginPage.fillPassword(invalidUser.password);
      LoginPage.signInButton().click();
      LoginPage.errorMessage().should("be.visible");
    });

    it("Should succeed for valid user", () => {
      LoginPage.fillEmail(validUser.email);
      LoginPage.fillPassword(validUser.password);
      LoginPage.signInButton().click();
      ArticlePage.userEmail().should("be.visible");
    });
  });
});
