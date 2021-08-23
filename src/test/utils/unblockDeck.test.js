import { unblockDeck } from "../../utils/helpers";

const blockingCard = {
  id: "c03ec33f-ca00-4406-b266-100b14584ac2",
  value: 1,
  isOpen: true,
  isDraggable: true,
  blocking: true,
};

const singleBlockedColumn = [
  {
    id: "26f4a0d0-a3c5-4f3b-9652-44476431323d",
    value: 3,
    isOpen: false,
    isDraggable: false,
  },
  {
    id: "adcd1ca4-9e7a-4da0-b31f-f0b49d4fc94b",
    value: 6,
    isOpen: true,
    isDraggable: false,
  },
  {
    id: "802e1658-1383-47fa-a73f-9c8fa1b0f0cc",
    value: 7,
    isOpen: true,
    isDraggable: false,
  },
];

const doubleBlockedColumn = [
    {
      id: "adcd1ca4-9e7a-4da0-b31f-f0b49d4fc94b",
      value: 6,
      isOpen: true,
      isDraggable: false,
    },
    {
      id: "802e1658-1383-47fa-a73f-9c8fa1b0f0cc",
      value: 7,
      isOpen: true,
      isDraggable: false,
    },
    {
        id: "c03ec33f-ca00-4406-b266-100b14584ac2",
        value: 1,
        isOpen: true,
        isDraggable: true,
        blocking: true,
      }
  ];

describe("Unblock Deck", () => {
  it("should unblock deck after blocking card is moved", () => {
    const unblockedColumn = unblockDeck(singleBlockedColumn, blockingCard);
    const length = unblockedColumn.length;

    expect(unblockedColumn[length - 1].isDraggable).toBe(true);
    expect(unblockedColumn[length - 2].isDraggable).toBe(true);

    expect(unblockedColumn[length - 3].isDraggable).toBe(false);

    expect(blockingCard.blocking).toBe(false);
  });
  it("should not unblock deck if last card is a blocking card", () => {
    const unblockedColumn = unblockDeck(doubleBlockedColumn, blockingCard);
    const length = unblockedColumn.length;

    expect(unblockedColumn[length - 1].isDraggable).toBe(true);

    expect(unblockedColumn[length - 2].isDraggable).toBe(false);
    expect(unblockedColumn[length - 3].isDraggable).toBe(false);

    expect(blockingCard.blocking).toBe(false);
  });
});
