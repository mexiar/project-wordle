import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guess from "../Guess/Guess";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";
import { NUM_OF_GUESSES_ALLOWED } from "/src/constants.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function showBanner(guessList, answer) {
    if (guessList[guessList.length - 1] === answer) {
      return <HappyBanner guessList={guessList} />;
    } else {
      if (guessList.length >= NUM_OF_GUESSES_ALLOWED) {
        return <SadBanner answer={answer} />;
      } else {
        return null;
      }
    }
  }

  return (
    <>
      <Guess guessList={guessList} answer={answer} />
      <GuessInput
        guessList={guessList}
        setGuessList={setGuessList}
        answer={answer}
      />
      {showBanner(guessList, answer)}
    </>
  );
}

export default Game;
