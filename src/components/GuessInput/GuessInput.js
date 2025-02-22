import React from 'react';

function GuessInput({handleSubmitGuess, gameStatus}) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  
  function handleInputOnChange(e){
    const nextGuess = e.target.value.toUpperCase();
    setTentativeGuess(nextGuess);     
  }

  function handleOnSubmit(e){
    e.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form 
      onSubmit={handleOnSubmit}
      className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus !== 'running'}
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={tentativeGuess}
        onChange={handleInputOnChange}
        id="guess-input" type="text" />
    </form>
  );
}

export default GuessInput;
