import { removeCompletedDeck } from "../../logic/actions/removeCompletedDeck";

const previousDecks = [
  [
    {
      id: "8dfc5462-a06a-4fc5-9282-d627d77a86a1",
      value: 1,
      isOpen: false,
      isDraggable: false,
    },
    {
      id: "ceb7375b-3005-4198-98fb-5d6f4f482f24",
      value: 2,
      isOpen: false,
      isDraggable: false,
    },
    {
      id: "c2d3f62e-a8e6-4ca0-886e-f86cf2b2aeef",
      value: 9,
      isOpen: false,
      isDraggable: false,
    },
    {
      id: "a499bff0-df39-41a1-bf9d-b2c69791b7e4",
      value: 11,
      isOpen: false,
      isDraggable: false,
    },
    {
      id: "741bf651-0491-4719-8b98-063bea4a4462",
      value: 6,
      isOpen: true,
      isDraggable: true,
    },
    {
      id: "855e5d7d-bbea-44e3-8f0f-4b24d6439fbb",
      value: 7,
      isOpen: true,
      isDraggable: true,
    },
    {
      id: "a4f9b37b-88b8-4d47-b135-3ef4af1f3e31",
      value: 8,
      isOpen: true,
      isDraggable: true,
    },
  ],
];
const sortedCardIDs = [
  "741bf651-0491-4719-8b98-063bea4a4462",
  "855e5d7d-bbea-44e3-8f0f-4b24d6439fbb",
  "a4f9b37b-88b8-4d47-b135-3ef4af1f3e31",
];
describe("Remove Completed Deck", () => {
  it("should remove completed deck from decks array", () => {});
  const newDecks = removeCompletedDeck(0, sortedCardIDs, previousDecks);
  expect(newDecks[0]).toHaveLength(4);
});
