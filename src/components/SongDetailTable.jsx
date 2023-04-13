import React from 'react';

const SongDetailTable = (props) => {
    return(
        
          <tr className='odd:bg-zinc-700 even:bg-zinc-500'>
            <td className='p-4 font-bold'>{ props.rowHeading }</td>
            <td className='p-4'>{ props.rowBody }</td>
          </tr>

    );
}

export default SongDetailTable;