it("renders learn react link", () => {
  cy.visit("http://localhost:3000/");
  cy.url().should("equal", "http://localhost:3000/");
});

describe("Game Renders Correctly", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should have title", () => {
    const title = cy.title();
    title.should('not.be.null').and('equal', 'Reversed Spider Solitaire');
  })
  it("should render 10 columns", () => {
    const columnsContainer = cy.get('.columns-container');
    columnsContainer.should('not.be.empty')
    columnsContainer.children().should('have.length', 10);
  })
  it("should render 54 playable cards", () => {
    const cards = cy.get('.column-container>.card-container')
    cards.should('have.length', 54);
  })
  it("should render 5 spare decks", () => {
    const spareDecks = cy.get('.spare-decks-container');
    spareDecks.should('not.be.empty');
    spareDecks.first().children().should('have.length', 5);
  })
  it("should render 8 uncompleted decks", () => {
    const uncompletedDecks = cy.get('.completed-decks-container>.card-container');
    uncompletedDecks.should('not.be.empty');
    uncompletedDecks.should('have.length', 8);
  })
});

describe("Click Events Works Correctly", () => {
  it("should alert if no previous moves exist", () => {
    const undoButton = cy.get('.undo');
    undoButton.click();
    cy.on('window:alert', (msg) => {
      expect(msg).to.contains('There is no move to take back!');
    });
  })
  it("should emphasize clicked card", () => {
    const openCard = cy.get('.card-open-container').children().first();
    openCard.click();
    openCard.should('have.css', 'border', '5px solid rgb(255, 0, 0)');
  });
  it("should unemphasize after clicking a card again", () => {
    const openCard = cy.get('.card-open-container').children().first();
    openCard.click();
    openCard.should('not.have.css', 'border', '5px solid rgb(255, 0, 0)');
  });
  it("should deal cards after clicking spare decks", () => {
    const initialSpareDecks = cy.get('.spare-deck');
    initialSpareDecks.last().click();

    const cards = cy.get('.column-container>.card-container');
    cards.should('have.length', 64);

    const spareDecksAfterClick = cy.get('.spare-deck');
    spareDecksAfterClick.children().should('have.length', 4);
  });
  it("should restart game after clicking play again", () => {
    const restartButton = cy.get('.restart');
    restartButton.click({multiple:true});

    const cards = cy.get('.column-container>.card-container');
    cards.should('have.length', 54);
  });
  it("should reveal cheat column after clicking cheat", () => {
    const initialColumns = cy.get('.column-container');
    initialColumns.should('have.length', 10);

    const cheatButton = cy.get('.cheat');
    cheatButton.click({multiple:true});

    const cheatedColumns = cy.get('.column-container');
    cheatedColumns.should('have.length', 11);

    cy.wait(10000);
    const columnsAfterCheatDisappears = cy.get('.column-container');
    cheatedColumns.should('have.length', 10);
  });

})
