import { LoginPage } from "../page-objects/loginPage.js";
import { ArticlePage } from "../page-objects/articlePage";

let validUser;

describe("Article Tests", () => {
  before(function () {
    cy.fixture("users").then((users) => {
      validUser = users.valid;
    });
    LoginPage.visit();
  });

  describe("Login", () => {
    it("Should succeed for valid user", () => {
      LoginPage.fillEmail(validUser.email);
      LoginPage.fillPassword(validUser.password);
      LoginPage.signInButton().click();
      ArticlePage.userEmail().should("be.visible");
    });
  });

  describe("Create Article", () => {
    it("Should redirect to Article page when link is clicked", () => {
      ArticlePage.articleLink().click();
      cy.url().should("include", "/editor");
    });

    it("Should input Article Title", () => {
      ArticlePage.titleInputField().type("Hello World, testing Conduit");
    });

    it("Should input Article Description text", () => {
      ArticlePage.descriptionInputField().type(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      );
    });

    it("Should input text into Article input field", () => {
      ArticlePage.articleInputField().type(
        "Aliquam viverra vitae odio id ornare. Donec aliquet efficitur augue in sollicitudin. Nulla vestibulum."
      );
    });

    //Bug observed when attempting to click on Publish button
    it("Should publish article when button is selected", () => {
      ArticlePage.publishArticleButton().click();
    });
  });

  describe("Delete an Article", () => {
    it("Should redirect to Article list", () => {
      ArticlePage.userEmail().click();
    });
  });
});
