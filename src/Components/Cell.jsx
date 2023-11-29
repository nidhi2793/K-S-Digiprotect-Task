import cellConfig from "../cellConfig";
import CONSTANTS from "../constant";

const Cell = ({ position, player }) => {
  const config = cellConfig[position] || null;

  return (
    <div className="cell">
      <div>{position}</div>
      {Number.isInteger(player) && (
        <div className="player">
          <img src={CONSTANTS.PLAYER_ICONS[player]} alt={`P${player}`} />
        </div>
      )}
      {config && (
        <div>
          {config.type === CONSTANTS.SNAKE ? "S" : "L"}
          {config.endIndex}
        </div>
      )}
    </div>
  );
};

export default Cell;
