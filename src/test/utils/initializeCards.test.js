import { initializeCards } from "../../utils/helpers";

describe("Initialize Decks", () => {
  describe("Initialize Playable Decks Array", () => {
    const [playableDecks] = initializeCards();
    it("should have length of 10", () => {
      const expectedLength = 10;
      expect(playableDecks).toHaveLength(expectedLength);
    });
    describe("Initialize Decks", () => {
      it("should have arrays with length of 6 at indexes 0 to 3", () => {
        const [firstDeck, secondDeck, thirdDeck, fourthDeck] = playableDecks;
        const expectedLength = 6;
        expect(firstDeck).toHaveLength(expectedLength);
        expect(secondDeck).toHaveLength(expectedLength);
        expect(thirdDeck).toHaveLength(expectedLength);
        expect(fourthDeck).toHaveLength(expectedLength);
      });
      it("should have arrays with length of 5 at indexes 4 to 9", () => {
        const [
          ,
          ,
          ,
          ,
          fifthDeck,
          sixthDeck,
          seventhDeck,
          eighthtDeck,
          ninethDeck,
          tenthDeck,
        ] = playableDecks;
        const expectedLength = 5;
        expect(fifthDeck).toHaveLength(expectedLength);
        expect(sixthDeck).toHaveLength(expectedLength);
        expect(seventhDeck).toHaveLength(expectedLength);
        expect(eighthtDeck).toHaveLength(expectedLength);
        expect(ninethDeck).toHaveLength(expectedLength);
        expect(tenthDeck).toHaveLength(expectedLength);
      });

      test.each(playableDecks[0])("should have properties", (card) => {
        expect(card).toHaveProperty("id");
        expect(card).toHaveProperty("value");
        expect(card).toHaveProperty("isDraggable");
        expect(card).toHaveProperty("isOpen");
      });
      test.each(playableDecks[0])("should have value between 1-13", (card) => {
        const cardValue = card.value;
        expect(cardValue).toBeLessThanOrEqual(13);
        expect(cardValue).toBeGreaterThanOrEqual(1);
      });
    });
  });
  describe("Initialize Spare Decks Array", () => {
    const [, spareDecks] = initializeCards();
    it("should have length of 5", () => {
      const expectedLength = 5;
      expect(spareDecks).toHaveLength(expectedLength);
    });
    describe("Initialize Decks", () => {
      it("should have arrays with length of 10", () => {
        const [firstDeck, secondDeck, thirdDeck, fourthDeck, fifthDeck] =
          spareDecks;
        const expectedLength = 10;
        expect(firstDeck).toHaveLength(expectedLength);
        expect(secondDeck).toHaveLength(expectedLength);
        expect(thirdDeck).toHaveLength(expectedLength);
        expect(fourthDeck).toHaveLength(expectedLength);
        expect(fifthDeck).toHaveLength(expectedLength);
      });

      test.each(spareDecks[0])("should have properties", (card) => {
        expect(card).toHaveProperty("id");
        expect(card).toHaveProperty("value");
        expect(card).toHaveProperty("isDraggable");
        expect(card).toHaveProperty("isOpen");
      });
      test.each(spareDecks[0])("should have value between 1-13", (card) => {
        const cardValue = card.value;
        expect(cardValue).toBeLessThanOrEqual(13);
        expect(cardValue).toBeGreaterThanOrEqual(1);
      });
    });
  });
});
