import { removeDraggedCardsFromDeck } from "../../logic/actions/removeDraggedCardsFromDeck";

const cardToDrag = {
  id: "3bdcc87a-b5f5-4cf0-bb3d-40995406a6fd",
  value: 9,
  isOpen: true,
  isDraggable: true,
};

const decks = [
  [
    {
      id: "49f11788-d4f9-4601-a26a-44cc943ca52e",
      value: 6,
      isOpen: false,
      isDraggable: false,
    },
    cardToDrag,
    {
      id: "efc26f41-efa6-4c9a-b744-b38c6cd29741",
      value: 10,
      isOpen: true,
      isDraggable: true,
    },
  ],
];

describe("Remove Dragged Cards From Deck", () => {
  it("should remove dragged cards from deck", () => {
    const newDecks = removeDraggedCardsFromDeck(0, cardToDrag, decks);

    expect(newDecks[0]).toHaveLength(1);

    expect(newDecks[0][0].isOpen).toBe(true);
    expect(newDecks[0][0].isDraggable).toBe(true);
  });
});
