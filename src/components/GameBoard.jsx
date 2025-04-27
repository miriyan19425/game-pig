import {useState} from 'react';
import Info from './Info';
import DieImg from './DieImg';
import Button from './Button';

function GameBoard({playerName}){
    
    const [score, setScore] = useState(1);
    const [unsavedScore, setUnsavedScore] = useState(0);

    function roll(){
        const randomInt = Math.trunc(Math.random() * 6) + 1;
        setScore(randomInt);
        randomInt === 1 ? setUnsavedScore(0) : setUnsavedScore(prev => prev += randomInt);
    }

    return (
        <section>
            <Info clN='name'>{playerName}</Info>
            <DieImg diePoints={score} />
            <Info clN={unsavedScore === 0 ? 'zero' : 'nonzero'}>{unsavedScore}</Info>
            <Button handleClick={roll}>Roll</Button>
            <Info clN='savedPoints'>0</Info>
            <Button>Save</Button>
        </section>
    );
}

export default GameBoard;
