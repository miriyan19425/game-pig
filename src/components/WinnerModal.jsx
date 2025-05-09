function WinnerModal({ name, handleNewGame }) {
  return (
    <dialog className="modal" open>
      <h1>{name} wins!</h1>
      <form method="dialog">
        <button className='button' onClick={handleNewGame}>New Game</button>
      </form>
    </dialog>
  );
}

export default WinnerModal;
