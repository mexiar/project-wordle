import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "/src/constants.js";
import { range } from "../../utils";
import { checkGuess } from "/src/game-helpers.js";

function Guess({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, guessIndex) => {
        let currentWord = checkGuess(guessList[guessIndex], answer) ?? "";
        console.log("Palabra ingresada", guessList[guessIndex]);
        console.log("Respuesta", answer);
        console.log("Revisión", currentWord);
        return (
          <p key={Math.random()} className="guess">
            {range(5).map((_, letterIndex) => {
              return (
                <span
                  key={Math.random()}
                  className={`cell ${
                    currentWord[letterIndex]
                      ? currentWord[letterIndex]["status"]
                      : ""
                  }`}
                >
                  {guessList[guessIndex]
                    ? guessList[guessIndex][letterIndex]
                    : ""}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;
