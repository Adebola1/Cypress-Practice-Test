class LoginPage {
  //Aim to covert to Data Test ID's for better reliability.
  static visit() {
    cy.visit("http://localhost:4202/login");
  }

  static logo() {
    return cy.get(".navbar-brand");
  }

  static navBar() {
    return cy.get(".navbar");
  }

  static signInHeader() {
    return cy.get(".text-xs-center");
  }

  static loginForm() {
    return cy.get(".ng-untouched");
  }

  static needAnAccountLink() {
    return cy.get("p.text-xs-center > a");
  }

  static fillEmail(value) {
    const field = cy.get(":nth-child(2) > .form-control");
    field.type(value);
    return this;
  }

  static fillPassword(value) {
    const field = cy.get(":nth-child(3) > .form-control");
    field.type(value);
    return this;
  }

  static signInButton() {
    return cy.get(".btn");
  }

  static errorMessage() {
    return cy.get(".error-messages > li");
  }
}

export { LoginPage };
