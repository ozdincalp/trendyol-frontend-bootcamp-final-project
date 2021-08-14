export const showHint =  (hints, playableDecks) => {
    const randomSource = Math.floor(Math.random() * hints.length);
    const sourceElementColumn = hints[randomSource].column;

    const randomTarget = Math.floor(Math.random() * hints[randomSource].values.length);
    const targetElementColumn = hints[randomSource].values[randomTarget];

    const sourceElementID = playableDecks[sourceElementColumn][playableDecks[sourceElementColumn].length - 1].id;
    const targetElementID = playableDecks[targetElementColumn][playableDecks[targetElementColumn].length - 1].id;

    const sourceElement = document.getElementById(sourceElementID);
    const targetElement = document.getElementById(targetElementID);
    sourceElement.classList.add("emphasized");
    setTimeout(() => {
      sourceElement.classList.remove("emphasized");
      targetElement.classList.add("emphasized");
      setTimeout(() => {
        targetElement.classList.remove("emphasized")
      }, 0.7 * 1000);
    }, 0.7 * 1000);
  };