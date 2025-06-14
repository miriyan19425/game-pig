import Button from './Button';
import styles from './WinnerModal.module.css';

function WinnerModal({ name, handleNewGame }) {
  return (
    <dialog className={styles.modal} open>
      <h1 className={styles.win-message}>{name} wins!</h1>
      <form method="dialog">
        <Button handleClick={handleNewGame}>New Game</Button>
      </form>
    </dialog>
  );
}

export default WinnerModal;
