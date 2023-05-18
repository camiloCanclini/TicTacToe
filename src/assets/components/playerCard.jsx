import "./playerCard.css";
import crossIcon from '../forms/cross.svg'
import circleIcon from '../forms/circle.svg'

export default function PlayerCard({ player, turn }) {
  //console.log(player);
  let turnOn = turn ? "turnOn" : "turnOff";
  let playerNumber = player.icon=='X' ? "playerOne" : "playerTwo"
  return (
    <div className={playerNumber +" "+ turnOn +" playercard flex items-center flex-grow mx-4 my-3 rounded-xl"}>
      <img
        src={
          player.icon=='X' ? crossIcon : circleIcon
        }
        alt=""
        width={50}
        height={40}
        className="m-2"
      />
      <span className="flex-grow text-xl ">{player.name}</span>
    </div>
  );
}
