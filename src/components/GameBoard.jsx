import Info from './Info';
import DieImg from './DieImg';
import Button from './Button';

function GameBoard({playerName, points, unsavedPoints, savedPoints, handleSavedPoints, handleUnsavedPoints}){
    
    return (
        <section>
            <Info clN='name'>{playerName}</Info>
            <DieImg diePoints={points} />
            <Info clN={unsavedPoints === 0 ? 'zero' : 'nonzero'}>{unsavedPoints}</Info>
            <Button handleClick={handleUnsavedPoints}>Roll</Button>
            <Info clN='saved'>{savedPoints}</Info>
            <Button handleClick={handleSavedPoints}>Save</Button>
        </section>
    );
}

export default GameBoard;
