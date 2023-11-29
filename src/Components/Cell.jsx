import cellConfig from "../cellConfig";
import CONSTANTS from "../constant";

const Cell = ({ position, player, openDescription }) => {
  const config = cellConfig[position] || null;

  return (
    <div
      className={
        config === null
          ? "cell"
          : config.type === CONSTANTS.SNAKE
          ? "snake"
          : "ladder"
      }
    >
      <div className="cellNumber">{position}</div>
      {Number.isInteger(player) && (
        <div className="player">
          <img src={CONSTANTS.PLAYER_ICONS[player]} alt={`P${player}`} />
        </div>
      )}
      {config && (
        <div
          onClick={() =>
            openDescription(config.title, config.detail, config.type)
          }
        >
          <div>
            {config.type === CONSTANTS.SNAKE ? "S" : "L"}
            {config.endIndex}
          </div>
          <div className="title">
            <div>{config.title}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cell;
