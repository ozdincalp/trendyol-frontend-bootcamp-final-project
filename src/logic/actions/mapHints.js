export const mapHints = (playableDecks) => {
    const lastCards = playableDecks.map((deck) => deck[deck.length - 1]?.value);
    const hints = [];

    lastCards.forEach((value) => {
      const result = lastCards.reduce((acc, element, index) => {
        if (element === value - 1) {
          acc.push(index);
        }
        return acc;
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
    return mappedHints.filter((column) => !!column);
};