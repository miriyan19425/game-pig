import {useState} from 'react';
import GameBoard from './components/GameBoard';
import WinnerModal from './components/WinnerModal';

function App() {
  const [score1, setScore1] = useState(1);
  const [score2, setScore2] = useState(1);
  const [unsavedScore1, setUnsavedScore1] = useState(0);
  const [unsavedScore2, setUnsavedScore2] = useState(0);
  const [savedScore1, setSavedScore1] = useState(0);
  const [savedScore2, setSavedScore2] = useState(0);
  const player1 = 'PLAYER 1';
  const player2 = 'PLAYER 2';

  function save1(){
    setSavedScore1(prev => prev + unsavedScore1);
    setUnsavedScore1(0);
  }

  function save2(){
    setSavedScore2(prev => prev + unsavedScore2);
    setUnsavedScore2(0);
  }

  function roll1(){
    const randomInt = Math.trunc(Math.random() * 6) + 1;
    setScore1(randomInt);
    randomInt === 1 ? setUnsavedScore1(0) : setUnsavedScore1(prev => prev + randomInt);
  }

  function roll2(){
    const randomInt = Math.trunc(Math.random() * 6) + 1;
    setScore2(randomInt);
    randomInt === 1 ? setUnsavedScore2(0) : setUnsavedScore2(prev => prev + randomInt);
  }

  function newGame(){
    setScore1(1);
    setScore2(1);
    setUnsavedScore1(0);
    setUnsavedScore2(0);
    setSavedScore1(0);
    setSavedScore2(0);
  }
   
  return  (
    <>
      {(savedScore1 >= 25 || savedScore2 >= 25) && <WinnerModal name={savedScore1 >= 25 ? player1 : player2} handleNewGame={newGame} />}
      <GameBoard playerName={player1} points={score1} unsavedPoints={unsavedScore1} savedPoints={savedScore1} handleUnsavedPoints={roll1} handleSavedPoints={save1} />
      <GameBoard playerName={player2} points={score2} unsavedPoints={unsavedScore2} savedPoints={savedScore2} handleUnsavedPoints={roll2} handleSavedPoints={save2} />
    </>
  ); 
}

export default App;
