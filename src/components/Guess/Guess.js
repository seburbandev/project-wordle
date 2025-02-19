import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers/';

function Guess({guessList, answer}) {

  return (
    <div className="guess-results">
      {
        guessList.map(({id, name})=>(
          <p class="guess">
            {
              checkGuess(name, answer).map(({letter, status})=>(
                <span class={"cell " + status}>{letter}</span>
              ))
            }
        </p>
        ))
      }
      {
        range(NUM_OF_GUESSES_ALLOWED-guessList.length).map(()=> (
          <p className="guess">
            {
              range(5).map(()=>(
                <span class="cell"></span>
              ))
            }
          </p>
        ))
      }
  </div>
  );
}

export default Guess;
