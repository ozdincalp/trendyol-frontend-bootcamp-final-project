import confetti from "canvas-confetti";

export const throwConfetti = () => {
    var duration = 5 * 1000;
    var colors = ["#bb0000", "#ffffff", "#000"];
    var end = Date.now() + duration;
  
    (function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 110,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 110,
        origin: { x: 1 },
        colors: colors,
      });
  
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };  

export const showHint = (hints, playableDecks, spareDecks) => {
    if(!hints.length > 0) {
        if(spareDecks.length > 0) {
          const elem = document.getElementById("spare_decks");
          elem.classList.add("highlighted");
          setTimeout(() => {
            elem.classList.remove("highlighted")
          }, 1 * 1000);
        }
    } else {
  
      const randomIndex = Math.floor(Math.random() * hints.length);
      if(hints[randomIndex]) {
        const sourceElementColumn = hints[randomIndex].column;
    
      const randomTarget = Math.floor(
        Math.random() * hints[randomIndex].values.length
      );
      const targetElementColumn = hints[randomIndex].values[randomTarget];
    
      const sourceElementID =
        playableDecks[sourceElementColumn][
          playableDecks[sourceElementColumn].length - 1
        ].id;
      const targetElementID =
        playableDecks[targetElementColumn][
          playableDecks[targetElementColumn].length - 1
        ].id;
    
      const sourceElement = document.getElementById(sourceElementID);
      const targetElement = document.getElementById(targetElementID);
    
      const sourceElementPosition = sourceElement.getBoundingClientRect();
      const targetElementPosition = targetElement.getBoundingClientRect();
    
      const shiftX = targetElementPosition.left - sourceElementPosition.left;
      const shiftY = targetElementPosition.top - sourceElementPosition.top;
      sourceElement.animate(
        [
          {
            transform: `translate(${shiftX}px, ${shiftY}px)`,
            backgroundColor: "lightgray",
            zIndex: "9999",
          },
        ],
        {
          duration: 1200,
        }
      );
    
      sourceElement.classList.add("emphasized");
      setTimeout(() => {
        sourceElement.classList.remove("emphasized");
        targetElement.classList.add("emphasized");
        setTimeout(() => {
          targetElement.classList.remove("emphasized");
        }, 0.5 * 1000);
      }, 1 * 1000);
      }
    }
    
  };
  