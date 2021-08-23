import { undoMove } from "../../logic/actions/undoMove";

const cardToUndo = {
    id: "47468674-3eef-4f73-a88e-426b157465c4",
    value: 3,
    isOpen: true,
    isDraggable: true,
  };

const previousDecks = [
  [
    {
      id: "293574eb-04e6-419e-9439-bb65f5842f5e",
      value: 2,
      isOpen: true,
      isDraggable: true,
    },
    cardToUndo,
  ],
  [
    {
      id: "9f0ecc9f-4c18-4c05-b981-7ee5358243f6",
      value: 11,
      isOpen: true,
      isDraggable: true,
    },
  ],
];
const moves = [
  {
    draggedCards: [
      {
        id: "47468674-3eef-4f73-a88e-426b157465c4",
        value: 3,
        isOpen: true,
        isDraggable: true,
      },
    ],
    from: 1,
    to: 0,
    previousCard: { isOpen: false, isDraggable: false },
  },
];

describe("Undo Move", () => {
    it("should undo move", () => {
        const { removedState, newMoves } = undoMove(moves, previousDecks);

        expect(removedState).toHaveLength(2);

        expect(removedState[0]).toHaveLength(1);

        expect(removedState[1]).toHaveLength(2);  
        expect(removedState[1][0].isOpen).toBe(false);  
        expect(removedState[1][0].isDraggable).toBe(false);


        expect(removedState[1][1]).toStrictEqual(cardToUndo);
    })
})
