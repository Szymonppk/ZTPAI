import React from 'react';

const singleDots = [3, 5, 7, 9, 15, 17, 19, 21];
const doubleDots = [12, 24];

function Fretboard() {
  const strings = Array.from({ length: 6 }, (_, i) => i);
  const frets = Array.from({ length: 25 }, (_, i) => i);

  return (
    
    <div className="w-full h-[25vh] min-h-[140px] p-2 bg-stone-900 flex flex-col justify-center rounded-xl shadow-2xl border border-stone-700 select-none">
      
      {/* Neck */}
      <div className="flex flex-col w-full relative flex-1">
        {strings.map((stringIndex) => (
          
          
          <div key={stringIndex} className="flex w-full relative flex-1">
            {frets.map((fretIndex) => {
              const isSingleDot = singleDots.includes(fretIndex) && stringIndex === 2; 
              const isDoubleDotTop = doubleDots.includes(fretIndex) && stringIndex === 1;
              const isDoubleDotBottom = doubleDots.includes(fretIndex) && stringIndex === 3;

              return (
                <div 
                  key={fretIndex} 
                  className={`
                    relative flex items-center justify-center 
                    border-r-[1px] border-stone-500  // To jest pionowy próg (metalowa sztabka)
                    ${fretIndex === 0 
                      ? 'w-[8%] max-w-[60px] flex-none bg-stone-800 border-r-4' // Siodełko
                      : 'flex-1' 
                    } 
                  `}
                >
                  {/* Strings */}
                  <div className="absolute w-full h-[1px] md:h-[2px] bg-gray-300 top-1/2 -translate-y-1/2 z-0 shadow-sm"></div>

                  {/* Dot */}
                  {(isSingleDot || isDoubleDotTop || isDoubleDotBottom) && (
                    <div className="w-2 h-2 md:w-4 md:h-4 bg-stone-500 rounded-full z-10 opacity-50 shadow-inner"></div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      
      {/* Fret number */}
      <div className="flex w-full h-5 mt-1 text-stone-500 font-mono text-[10px] md:text-xs leading-none items-start">
         <div className="w-[8%] max-w-[60px] text-center flex-none">0</div>
         {frets.slice(1).map((_, i) => (
            <div key={i} className="flex-1 text-center">{i + 1}</div>
         ))}
      </div>
    </div>
  );
}

export default Fretboard;