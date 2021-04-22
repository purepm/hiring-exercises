describe("Investors can Log-in to the site", () => {
  it("Visits the Site", () => {
    cy.visit("/")
    
    cy.url().should("include", "/")

    cy.get('.sign-in').contains('Sign In')
    cy.get("input[name=email]").type("fake@email.com").should("have.value", "fake@email.com")
  })
})
