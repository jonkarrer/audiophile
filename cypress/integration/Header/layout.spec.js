/// <reference types="cypress" />

describe("Check layout components", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("finds the header", () => {
    cy.get("header").should("exist");
  });
});
