import React, { useState } from "react";
import HangmanDrawing from "./HangmanDrawing";
import CurrentWord from "./CurrentWord";
import Keyboard from "./Keyboard";

function App() {
  const words = [
    "VERSTAPPEN",
    "PEREZ",
    "HAMILTON",
    "RUSSELL",
    "LECLERC",
    "SAINZ",
    "NORRIS",
    "PIASTRI",
    "GASLY",
    "OCON",
    "HULKENBURG",
    "MAGNUSSEN",
    "BOTTAS",
    "ZHOU",
    "TSUNODA",
    "DEVRIES",
    "ALONSO",
    "STROLL",
    "ALBON",
    "SARGENT",
  ];

  const [wordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState([]);

  const mistakes = guessedLetters.filter((letter) => {
    return !wordToGuess.includes(letter);
  });

  const winner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const loser = mistakes.length >= 6;

  return (
    <div
      style={{
        width: "800px",
        display: "flex",
        gap: 50,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {!winner && !loser && <h1>Hangman</h1>}
      {winner && <h1>You WIN! Refresh to play again</h1>}
      {loser && <h1>You LOSE! Refresh to play again</h1>}
      <HangmanDrawing mistakeCount={mistakes.length} />
      <CurrentWord currentWord={wordToGuess} currentGuesses={guessedLetters} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          isActiveLetter={guessedLetters.filter((letter) => {
            return wordToGuess.includes(letter);
          })}
          isInactiveLetter={mistakes}
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
          endGame={winner || loser}
        />
      </div>
    </div>
  );
}

export default App;
