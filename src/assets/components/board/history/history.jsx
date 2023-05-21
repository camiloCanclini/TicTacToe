import iconCross from '../../../forms/cross.svg'
import iconCircle from '../../../forms/circle.svg'

let icon;

export default function History ({history, moveTo, moveNumber}) {

console.log(history);
console.log(moveNumber);
return (
    <>
        <p className='font-mono text-2xl bg-slate-300 text-center rounded-lg
        p-2 '>History</p>
        <ol>
        {history.map((record, index)=>{

            return(
                <li key={index} className={(moveNumber-1 == index ? 'bg-yellow-400': 'bg-slate-200') + ' flex justify-evenly h-12 bg-slate-200 rounded-xl px-2 w-full my-3 hover:scale-105 transition-all'}>
                    <button className='flex items-center w-full h-full gap-2' onClick={()=> moveTo(record.squares, index+1)}>
                        <img src={record.player.icon == 'X' ? iconCross : iconCircle} alt="" width='25px'/>
                        <span>{record.player.name}</span>
                        <span>{index != 0 ? 'Movement #'+index : 'Return to Beginning'}</span>
                    </button>
                </li>
            );
        })}        
        </ol>
    </>
);
}