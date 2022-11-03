class ArticlePage {
  //Aim to covert to Data Test ID's for better reliability.
  static userEmail() {
    return cy.get(":nth-child(4) > .nav-link");
  }

  static articleLink() {
    return cy.get(".container > .nav > :nth-child(2) > .nav-link");
  }

  static titleInputField() {
    return cy.get(":nth-child(1) > .form-control");
  }

  static descriptionInputField() {
    return cy.get(":nth-child(2) > .form-control");
  }

  static articleInputField() {
    return cy.get(":nth-child(3) > .form-control");
  }

  static publishArticleButton() {
    return cy.get(".btn");
  }
}

export { ArticlePage };
