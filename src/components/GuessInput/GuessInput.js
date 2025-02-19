import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');
  
  function handleInputOnChange(e){
    const nextGuess = e.target.value.toUpperCase();
    setGuess(nextGuess);     
  }

  function handleOnSubmit(e){
    e.preventDefault();
    console.log({guess});
    setGuess('');
  }

  return (
    <form 
      onSubmit={handleOnSubmit}
      className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={handleInputOnChange}
        id="guess-input" type="text" />
    </form>
  );
}

export default GuessInput;
