import React from 'react';

function EndGameBanner({endGame}) {
  
  if(endGame.isWinner){
    return (
      <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {endGame.guesses} guesses</strong>.
      </p>
    </div>
    );
  } else if(endGame.isLoser){
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{endGame.answer}</strong>.</p>
      </div>
    )
  }
  
}

export default EndGameBanner;
