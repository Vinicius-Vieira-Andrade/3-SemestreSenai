describe("template spec", () => {
  let musicaProcurada;

  before(() => {
    cy.visit("/");
  });

  it("Redireciona para tela de busca", () => {
    cy.get("[href='/Search']").click();
    cy.scrollTo("top");
  });

  it("Procura uma musica especifica", () => {
    cy.get("[data-testid='campoBusca']").type("Problemas de um Milionário");
    cy.get("[aria-label='music-item-search']").should(
      "have.length.greaterThan",
      0
    );
  });

  it("Clicar na musica de determinado artista", () => {
    // cy.get("[data-testid='campoBusca']").type("Trem Bala");

    musicaProcurada = cy
      .get("[aria-label='music-item-search']")
      .filter(":contains('WIU')");

    musicaProcurada.click();
  });

  it("Clicar no curtir da musica", () => {
    // musicaProcurada.then((item) => {
    //   cy.wait(2000);
    //   item.find("[data-testid='icon-button']").click();
    //   cy.wait(2000)
    // });

    //dessa forma deu
    cy.get(musicaProcurada).get("[data-testid='icon-button']").first().click();
  });
});
