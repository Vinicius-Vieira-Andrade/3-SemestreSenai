describe('template spec', () => {
  before('passes', () => {
    cy.visit('/')
  })

  
  it("Redireciona para tela de favoritos", () => {
    cy.get("[href='/Favorites']").click();
    cy.scrollTo("top");
  });

  it('eu vejo uma lista de músicas favoritas', () => {
    cy.get("[aria-label='favorites-music']").should("have.length.greaterThan", 0)
  });

  it('eu clico na musica favoritada', () => {
    cy.get("[aria-label='favorites-music']").eq(0).click()
  });
})