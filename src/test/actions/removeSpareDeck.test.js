import { removeSpareDeck } from "../../logic/actions/removeSpareDeck";

describe("Remove Spare Deck", () => {
    const spareDecks = [
        {
            id: 1
        },
        {
            id: 2
        }
    ];
    it("should remove spare deck", () => {
        const filteredDecks = removeSpareDeck(1, spareDecks);
        expect(filteredDecks).toHaveLength(1);
    })
    it("should return same deck for invalid id", () => {
        const filteredDecks = removeSpareDeck(3, spareDecks);
        expect(filteredDecks).toHaveLength(2);
        expect(filteredDecks).toEqual(spareDecks);
    })

})
