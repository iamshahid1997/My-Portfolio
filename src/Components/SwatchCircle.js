import React from 'react';

function SwatchCircle({ activeId, item, handleClick }) {
  return (
    <div
      className={`cursor-pointer w-9 h-9 p-1 rounded-full drop-shadow-xl bg-white transition ease-in hover:scale-110
    ${item.id === activeId ? 'scale-125' : ''}
    `}
      onClick={() => handleClick(item)}
    >
      <div
        className='w-full h-full rounded-full'
        style={{ backgroundColor: item.swatchColor }}
      ></div>
    </div>
  );
}

export default SwatchCircle;
