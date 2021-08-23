import { useEffect, useContext } from "react";
import {
  handleInitialize,
  handleClickMove,
  handleUndo,
  handleHints,
  handleCheat,
  handleReset,
} from "../../../logic/handlers/index";
import { showHint, throwConfetti } from "../../../utils/display";
import SpareDecks from "../../SpareDecks/SpareDecks";
import CompletedDecks from "../../CompletedDecks/CompletedDecks";
import Columns from "../../Columns/Columns";
import GameControllers from "../../GameControllers/GameControllers";
import Scoreboard from "../../Scoreboard/Scoreboard";
import "./Game.scss";
import { StoreContext } from "../../../context/store";

export const Game = () => {
  const {
    playableDecks: [playableDecks, setPlayableDecks],
    spareDecks: [spareDecks, setSpareDecks],
    hints: [hints, setHints],
    clickMove: [clickMove, setClickMove],
    moves: [moves, setMoves],
    showCheatColumn: [showCheatColumn, setShowCheatColumn],
    completedDeckCount: [completedDeckCount, setCompletedDeckCount],
    timer: [, setTimer],
    score: [, setScore],
  } = useContext(StoreContext);

  useEffect(() => {
    handleInitialize(setPlayableDecks, setSpareDecks);
    setInterval(() => {
      setTimer((prevState) => {
        const currentTime = prevState;
        let [hour, minute, second] = currentTime.split(":").map((time) => +time);
        if(second === 59) {
          minute++;
          if(minute === 60) {
            minute = 0;
            hour++;
          }
          second = 0;
        }
        else {
          second++;
        }
        if(second < 10) second = `0${second}`
        if(minute < 10) minute = `0${minute}`
        if(hour < 10) hour = `0${hour}`
        
        return `${hour}:${minute}: ${second}`
      })
    }, 1000);
  }, []);

  useEffect(() => {
    handleCheat(showCheatColumn, setPlayableDecks);
  }, [showCheatColumn]);
  useEffect(() => {
    document.onkeypress = (e) => handleKeypress(e, playableDecks, moves, hints);
  }, [playableDecks, moves, hints]);

  const handleKeypress = (e, playableDecks, moves, hints) => {
    switch (e.key) {
      case "h":
        showHint(hints, playableDecks, spareDecks);
        break;
      case "u":
        handleUndo(moves, playableDecks, setPlayableDecks, setMoves, setScore);
        break;
      case "c":
        setShowCheatColumn(true);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    if (clickMove.length) {
      handleClickMove(
        clickMove,
        playableDecks,
        setPlayableDecks,
        setClickMove,
        setMoves,
        setScore
      );
    }
  }, [clickMove, playableDecks]);

  useEffect(() => {
    if (completedDeckCount === 8) {
      throwConfetti();
    }
  }, [completedDeckCount]);

  useEffect(() => {
    handleHints(playableDecks, setHints);
  }, [playableDecks]);

  return (
    <div className="game-container">
      <Scoreboard />
      <div className="top-container">
        <SpareDecks decks={spareDecks} />
        <CompletedDecks />
      </div>
      {playableDecks.length ? <Columns /> : null}
      <GameControllers
        handleUndo={() =>
          handleUndo(moves, playableDecks, setPlayableDecks, setMoves, setScore)
        }
        handleHint={() => showHint(hints, playableDecks, spareDecks)}
        handleCheat={() => setShowCheatColumn(true)}
        handlePlayAgain={() =>
          handleReset(
            setPlayableDecks,
            setSpareDecks,
            setCompletedDeckCount,
            setClickMove,
            setMoves,
            setHints,
            setShowCheatColumn,
            setTimer,
            setScore
          )
        }
      />
    </div>
  );
};
