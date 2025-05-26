import Button from './Button';

function WinnerModal({ name, handleNewGame }) {
  return (
    <dialog className="modal" open>
      <h1>{name} wins!</h1>
      <form method="dialog">
        <Button handleClick={handleNewGame}>New Game</Button>
      </form>
    </dialog>
  );
}

export default WinnerModal;
