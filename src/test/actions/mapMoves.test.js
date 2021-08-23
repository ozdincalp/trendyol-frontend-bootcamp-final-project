import { mapMoves } from "../../logic/actions/mapMoves";

const previousMoves = [
  {
    draggedCards: [
      {
        id: "6019ad44-b7b3-4d92-9b65-0cf1939dd430",
        value: 6,
        isOpen: true,
        isDraggable: true,
      },
    ],
    from: 6,
    to: 4,
    previousCard: { isOpen: false, isDraggable: false },
  },
];
const draggedCards = [
  {
    id: "17a7c0dd-5c58-48c4-a562-3c900e2dcdca",
    value: 11,
    isOpen: true,
    isDraggable: true,
  },
];
const from = 7;
const to = 6;
const previousCard = { isOpen: false, isDraggable: false };

describe("Map Moves", () => {
  it("should add move to the moves array", () => {
    const newMoves = mapMoves(
      draggedCards,
      from,
      to,
      previousCard,
      previousMoves
    );
    expect(newMoves).toHaveLength(2);
    expect(newMoves[1]).toHaveProperty("draggedCards");
    expect(newMoves[1]).toHaveProperty("from");
    expect(newMoves[1]).toHaveProperty("to");
    expect(newMoves[1]).toHaveProperty("previousCard");
  });

  it("should return previous moves when move limit is reached", () => {
    const completedArr = Array(25);
    const newMoves = mapMoves([], 0, 1, {}, completedArr);
    expect(completedArr).toEqual(newMoves);
  })
});
