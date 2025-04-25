import Info from './Info';
import DieImg from './DieImg';
import Button from './Button';

function GameBoard({playerName}){
    return (
        <section>
            <Info clN='name'>{playerName}</Info>
            <DieImg />
            <Info clN='zero'>0</Info>
            <Button>Roll</Button>
            <Info clN='savedPoints'>0</Info>
            <Button>Save</Button>
        </section>
    );
}

export default GameBoard;
