import React from 'react';
import { checkGuess } from '../../game-helpers/';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function WordleInput({guessList, setGuessList, setEndGame, answer}) {

  const [wordleInput, setWordleInput] = React.useState('');

  return <>
    <form className="guess-input-wrapper"
    onSubmit={(event)=>{
      event.preventDefault();
      setWordleInput('');
      handleAddToGuessList(wordleInput);
    }}>
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="\w{5,5}"
        title="Word must have exactly 5 letters"
      value={wordleInput}
      onChange={(e)=> {
        const upperCaseText = e.target.value.toUpperCase();
        setWordleInput(upperCaseText);
      }}
      disabled={guessList.length === NUM_OF_GUESSES_ALLOWED}/>
    </form>
  </>;

  function handleAddToGuessList(word){
    const newWord = {
      id: Math.random(),
      name: word
    };
    const newGuessList = [...guessList, newWord];
    setGuessList(newGuessList);
    checkIfEndGame(newWord.name, newGuessList.length);
  }

  function checkIfEndGame(word, guessLength){
    
    const numCorrectLetters = checkGuess(word, answer).filter((item) => item.status === 'correct').length;
    const isWinner = numCorrectLetters === 5;
    const isLoser = numCorrectLetters !== 5 && guessLength === 6;

    setEndGame({
      isWinner,
      isLoser,
      answer,
      guesses: guessLength
    })
  }
}

export default WordleInput;
