import React from "react";

function HappyBanner({ guessList }) {
  return (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guessList.length} guesses</strong>.
      </p>
    </div>
  );
}

export default HappyBanner;
