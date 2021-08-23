import { moveClickedCards } from "../../logic/actions/moveClickedCards";

const cardToDrag = {
  id: "2526d64c-fefe-4301-8d05-d0f9fe77efba",
  value: 3,
  isOpen: true,
  isDraggable: true,
};

const cardToDrop = {
  id: "2c6c2f35-0eb6-4290-8741-7449216899ea",
  value: 2,
  isOpen: true,
  isDraggable: true,
};
const playableDecks = [[cardToDrop], [cardToDrag]];
const clickMove = [
  {
    card: cardToDrag,
    deckID: 1,
  },
  {
    card: cardToDrop,
    deckID: 0,
  },
];

describe("Move Clicked Cards", () => {
  it("should move second card to the first item's deck", () => {
    const { newPlayableDecks } = moveClickedCards(clickMove, playableDecks);
    expect(newPlayableDecks[0]).toHaveLength(2);
  });
});
