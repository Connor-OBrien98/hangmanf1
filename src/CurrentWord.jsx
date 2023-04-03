import React from "react";

export default function CurrentWord({ currentWord, currentGuesses }) {
  const wordSpaces = currentWord.split("");

  return (
    <div style={{ fontSize: 92, display: "flex", gap: 20 }}>
      {wordSpaces.map((letter, index) => {
        const dash = "-";
        return (
          <span key={index}>
            {currentGuesses.includes(letter) ? letter : dash}
          </span>
        );
      })}
    </div>
  );
}
