import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "/src/constants.js";

function GuessInput({ guessList, setGuessList, answer }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert("Debes ingrear al menos 5 letras");
      return;
    }

    if (guessList.includes(guess)) {
      window.alert("Ya has ingresado esta palabra");
      return;
    }

    if (guessList.length >= NUM_OF_GUESSES_ALLOWED) {
      window.alert("Ya has ingresado el máximo de 6 palabras");
      return;
    }

    setGuessList([...guessList, guess]);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        disabled={guessList.length >= NUM_OF_GUESSES_ALLOWED}
        type="text"
        value={guess}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        maxLength={5}
        style={{ textTransform: "uppercase" }}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
