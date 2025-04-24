import Info from './Info';

function GameBoard({playerName}){
    return (
        <section>
            <Info info={playerName} />
            <Info info={0} />
            <Info info={0} />
        </section>
    );
}

export default GameBoard;
