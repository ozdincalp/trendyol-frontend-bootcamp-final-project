import { mapHints } from "../../logic/actions/mapHints";

const decks = [
  [
    {
      id: "7778eda3-a204-41a6-a15e-4c3df0cabcf3",
      value: 9,
      isOpen: false,
      isDraggable: false,
    },
    {
      id: "5563b4eb-6531-4706-8cfe-918ff79f6c03",
      value: 9,
      isOpen: true,
      isDraggable: true,
    },
  ],
  [
    {
      id: "d43e34b2-1cc7-48d3-9992-64e2169980e1",
      value: 8,
      isOpen: true,
      isDraggable: true,
    },
  ],
  [
    {
      id: "bd021083-d7f9-4230-80e1-ea2aea838d98",
      value: 13,
      isOpen: true,
      isDraggable: true,
    },
  ],
  [
    {
      id: "9c009f1d-8883-40c6-b1c6-244a0b96b297",
      value: 10,
      isOpen: true,
      isDraggable: true,
    },
  ],
  [
    {
      id: "86559431-b36b-46a6-b8d5-b37a94372d14",
      value: 10,
      isOpen: true,
      isDraggable: true,
    },
  ],
  [
    {
      id: "3aa8b51d-38a5-466f-ad57-bf2743dcac2e",
      value: 9,
      isOpen: true,
      isDraggable: true,
    },
  ],
];

describe("Map Hints", () => {
    it("should map hints", () => {
        const hints = mapHints(decks);

        expect(hints[0].column).toBe(0);
        expect(hints[0].values).toHaveLength(1);
        expect(hints[0].values[0]).toBe(1);

        expect(hints[1].column).toBe(3);
        expect(hints[1].values).toHaveLength(2);
        expect(hints[1].values[0]).toBe(0);
        expect(hints[1].values[1]).toBe(5);

        expect(hints[2].column).toBe(4);
        expect(hints[2].values).toHaveLength(2);
        expect(hints[2].values[0]).toBe(0);
        expect(hints[2].values[1]).toBe(5);

    })
})
