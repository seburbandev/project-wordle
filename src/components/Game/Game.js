import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WordleInput from '../WordleInput/WordleInput';
import Guess from '../Guess/Guess';
import EndGameBanner from '../EndGameBanner/EndGameBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  
  const endGameDefault = { isWinner: false, isLoser: false, guesses: 0, answer: answer};
  const [guessList, setGuessList] = React.useState([]);
  const [endGame, setEndGame] = React.useState(endGameDefault);

 return (
    <>
      <EndGameBanner
        endGame={endGame}/>
      <Guess 
        guessList={guessList}
        answer={answer}/>
      <WordleInput
        guessList={guessList}
        setGuessList={setGuessList}
        answer={answer}
        setEndGame={setEndGame}/>
    </>
  )
};

export default Game;
