describe("Navbar Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the Navbar with all expected links", () => {
    cy.viewport(1280, 720);

    cy.get('[id="nav"]').should("be.visible");

    cy.get('[id="home"]').should("be.visible");
  });

  it("should navigate to the correct pages when links are clicked", () => {
    cy.viewport(1280, 720);

    cy.get('[id="about"]').click();
    cy.url().should("include", "/about");

    cy.get('[id="blog"]').click();
    cy.url().should("include", "/blog");
  });

  it("should toggle the theme when the theme switcher is clicked", () => {
    cy.viewport(1280, 720);

    cy.get('[data-cy="theme-switcher"]').click();
    cy.get("html").should("have.class", "light");
  });
});
