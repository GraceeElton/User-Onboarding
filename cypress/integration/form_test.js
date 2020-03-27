context("Test out inputs and submit our form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Add text to inputs and submit form", () => {
    cy.get('input[name="flname"]')
      .type("Gracee")
      .should("have.value", "Gracee");
    cy.get('[type = "checkbox"]')
      .check()
      .should("be.checked");
    cy.get("textarea")
      .type("Hello world")
      .should("have.value", "Hello world");
    cy.get("button").click();
  });
});
