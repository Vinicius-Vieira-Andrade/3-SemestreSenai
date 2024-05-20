describe("template spec", () => {
  // pra cada 'IT' como esse de baixo, server pra fazer uma verificacao, ele bate na rota e ve se ta funfando
  it("passes", () => {
    cy.visit("/");

    // faz a tela dessa rota ser a do iphone-xr
    // cy.viewport('iphone-xr')
  });

  it("Verifica se esta exibido", () => {
    //ele identifica todo recurso/propriedade que recebe esse valor 'title-head' no meu codigo
    cy.get("[aria-label='title-head']");

    //caso haja a frase 'Good morning' ele verifica se tem ou nao
    cy.get("[aria-label='title-head']").should("contain", "Good morning");
  });

  it("Verifica se tem uma lista com as playlist exibida", () => {
    //esoera, pra depois rodar
    cy.wait(2000)

    //existe dentro dessa lista, um recurso que seja maior que zero
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0);
  });

  // it('Clicar em uma opção de playlist e listar suas músicas', () => {
  //   //existe dentro dessa lista, pegue o primeiro que for clicado
  //   cy.get("[aria-label='playlist-item']").first().click()
  
  //   //esoera, pra depois rodar
  //   cy.wait(1000)
  //   //pega a posicao 5 das opcoes
  //   cy.get("[aria-label='music-item']").eq(4).click();
  //   //ajusta problema de scroll caso tenha, por conta da opcao de cima
  //   cy.scrollTo("top");
  // });

  it('Playlist bolada', () => {
    //existe dentro dessa lista, pegue o primeiro que for clicado
    cy.get("[aria-label='playlist-item']").eq(4).click()
    //esoera, pra depois rodar
    cy.wait(1000)
    //pega a pelo nome
    cy.get("[aria-label='music-item']").contains("Eu Mudo").click();
    //ajusta problema de scroll caso tenha, por conta da opcao de cima
    cy.scrollTo("top");
  });
});
