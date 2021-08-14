export const mapHints = (setHints, playableDecks) => {
    const decks = playableDecks.slice();
    const lastCards = decks.map((deck) => deck[deck.length - 1]?.value);
    const hints = [];
    lastCards.forEach((value) => {
      const result = lastCards.reduce((a, e, i) => {
        if (e === value - 1) {
          a.push(i);
        }
        return a;
      }, []);
      hints.push(result);
    });

    const mappedHints = hints.map((value, index) => {
      if(value.length > 0) {
        return {
          column: index,
          values: value
        }
      }
      else return null
    });
    setHints(mappedHints.filter((column) => !!column));
};