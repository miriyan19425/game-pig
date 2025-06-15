import Info from './Info';
import DieImg from './DieImg';
import Button from './Button';
import styles from './GameBoard.module.css';

function GameBoard({playerName, points, unsavedPoints, savedPoints, handleSavedPoints, handleUnsavedPoints}){
    
    return (
        <section className={styles.board}>
            <Info clN={styles.name}>{playerName}</Info>
            <DieImg diePoints={points} />
            <Info clN={`${unsavedPoints === 0 ? styles.zero : styles.nonzero}`}>{unsavedPoints}</Info>
            <Button handleClick={handleUnsavedPoints}>Roll</Button>
            <Info clN={styles.saved}>{savedPoints}</Info>
            <Button handleClick={handleSavedPoints}>Save</Button>
        </section>
    );
}

export default GameBoard;
