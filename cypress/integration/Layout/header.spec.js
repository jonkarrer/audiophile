/// <reference types="cypress" />

describe("Check layout components", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("Verifies header", () => {
    cy.get("header").should("exist");
  });

  it("checks hamburger onClick", () => {
    cy.get("[data-cy='hamburger']").click();

    cy.get("[data-cy='nav-component']").should(
      "have.attr",
      "data-test-state",
      "false"
    );

    cy.get("[data-cy='hamburger']").click();

    cy.get("[data-cy='nav-component']").should(
      "have.attr",
      "data-test-state",
      "true"
    );
  });
});
