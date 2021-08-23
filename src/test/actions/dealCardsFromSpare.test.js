import { dealCardsFromSpare } from "../../logic/actions/dealCardsFromSpare";

const spareDeck = [
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
];
const previousDecks = [
  [
    {
      value: 1,
    },
    {
      value: 2,
    },
  ],
  [
    {
      value: 1,
    },
    {
      value: 4,
    },
  ],
  [],
];
describe("Deal Cards From Spare", () => {
  it("should deal cards", () => {
    const newState = dealCardsFromSpare(spareDeck, previousDecks);
    expect(newState[0]).toHaveLength(3);
    expect(newState[0][2]).not.toHaveProperty("blocking");

    expect(newState[1]).toHaveLength(3);
    expect(newState[1][2]).toHaveProperty("blocking");

    expect(newState[2]).toHaveLength(1);
    expect(newState[2][0]).not.toHaveProperty("blocking");
  });
});
