import React from "react";

export default function Keyboard({
  guessedLetters,
  setGuessedLetters,
  isActiveLetter,
  isInactiveLetter,
  endGame,
}) {
  const letterList = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {letterList.map((letter) => {
        const isActive = isActiveLetter.includes(letter);
        const isInactive = isInactiveLetter.includes(letter);
        return (
          <button
            className={`keyboardBtn ${isActive && "active"} ${
              isInactive && "inactive"
            }`}
            key={letter}
            disabled={isActive || isInactive || endGame}
            onClick={() => setGuessedLetters([...guessedLetters, letter])}
          >
            {letter}
          </button>
        );
      })}
      ;
    </div>
  );
}
