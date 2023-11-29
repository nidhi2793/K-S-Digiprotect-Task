import Cell from "./Cell";

const Board = ({ playerPostitions = [], currentPlayer = null }) => {
  return (
    <div>
      <div className="cells-container">
        {[...Array(10)].map((v, row) => {
          const cells = [...Array(10)].map((v, col) => {
            let position = 100 - (row * 10 + col);
            let player = playerPostitions.indexOf(position);
            return (
              <Cell position={position} player={player >= 0 ? player : null} />
            );
          });
          return row % 2 === 0 ? cells : cells.reverse();
        })}
      </div>
    </div>
  );
};

export default Board;
