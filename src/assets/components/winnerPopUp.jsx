
import './winnerPopUp.css'
import trophyIcon from '../forms/trophy.svg'

export default function WinnerPopUp({winner, closePopUp, playAgain}){
    return (
        <div className="winnerPopUp z-10 flex flex-col items-center justify-center w-4/5 md:w-1/4 h-1/2 absolute rounded-xl">
            <div className='h-full flex flex-col items-center justify-evenly'>
                <img src={trophyIcon} width="300"  alt="" />
                <p className='text-2xl'>The Winner Is: {winner.name}</p>
            </div>
            <div className='flex p-2 my-6'>
                <button onClick={closePopUp} className='cursor-pointer p-4 bg-yellow-500 rounded-full w-28 shadow-inner shadow-amber-300 mx-2 hover:scale-105 transition-all'>Back</button>
                <button onClick={playAgain} className='cursor-pointer p-4 bg-yellow-500 rounded-full w-28 shadow-inner shadow-amber-300 mx-2 hover:scale-105 transition-all'>Play Again</button>
            </div>
        </div>
    );
}