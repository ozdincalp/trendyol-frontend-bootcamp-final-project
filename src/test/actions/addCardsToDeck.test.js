import { addCardsToDeck } from "../../logic/actions/addCardsToDeck";

describe("Add Cards To Deck", () => {
    const lastCardToDrag = {
        id: "aed80964-2e1b-49dc-80c2-40b187cb8c30",
        value: 2,
        isOpen: true,
        isDraggable: true,
      };
      const firstCardToDrag = {
        id: "f2a62a29-adcb-444c-92ee-ccea2065d2f2",
        value: 12,
        isOpen: false,
        isDraggable: false,
      };
    
      const decks = [
        [
          firstCardToDrag,
          {
            id: "83940485-d54c-4b8c-b312-d2eb5948e6d1",
            value: 3,
            isOpen: false,
            isDraggable: false,
          },
          {
            id: "9c431dc8-c075-4de1-96b6-5b5d71000af0",
            value: 2,
            isOpen: false,
            isDraggable: false,
          },
          {
            id: "83ab65bf-5eeb-44d1-86ed-8ba46339c415",
            value: 9,
            isOpen: false,
            isDraggable: false,
          },
          {
            id: "aed5b5f5-a522-41a6-95b5-75d10dace980",
            value: 1,
            isOpen: false,
            isDraggable: false,
          },
          {
            id: "cdd0c850-86ff-435e-bb07-c44c115d5403",
            value: 12,
            isOpen: true,
            isDraggable: true,
          },
        ],
        [
          {
            id: "bdfee483-5396-4802-b08d-f27faf2026ae",
            value: 8,
            isOpen: false,
            isDraggable: false,
          },
          {
            id: "0bca19e7-595a-4332-aa8e-46c7b9999ff3",
            value: 5,
            isOpen: false,
            isDraggable: false,
          },
          {
            id: "0e5a990f-06ee-43ac-97ef-1b302aae94da",
            value: 6,
            isOpen: false,
            isDraggable: false,
          },
          {
            id: "ae821d3b-2fb5-4148-ac06-6dcddd2c3601",
            value: 9,
            isOpen: false,
            isDraggable: false,
          },
          {
            id: "2f00eb4a-8a76-4966-958a-8a6d4cfcea5c",
            value: 9,
            isOpen: false,
            isDraggable: false,
          },
          lastCardToDrag,
        ],
        [],
      ];
    it("should add single card to empty deck", () => {
        const {newState, move} = addCardsToDeck(2, lastCardToDrag, decks);
        expect(newState[2]).toHaveLength(1);
        expect(move).toHaveProperty("draggedCards")
        expect(move).toHaveProperty("from")
        expect(move).toHaveProperty("to")
        expect(move).toHaveProperty("previousCard")
    })
})