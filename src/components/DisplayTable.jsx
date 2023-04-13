import React from 'react';


import SongTile from './SongTile';


const DisplayTable = (props) => {
    console.log(props.songs);
    return(
        <div className=' bg-zinc-900 w-full h-full'>
            <div className=' flex justify-center'> 
                <span className='text-amber-300  
                    text-4xl/[5rem]'>
                        Top 10 of this week
                </span>
                </div>
                <div className='flex flex-wrap justify-center'>
                {props.songs.items && props.songs.items.map((item, index) => (
                   
                    <SongTile key={index} number={index} id={item.track.id} name={item.track.name} 
                        image={item.track.album.images[0].url}/>
        
                ))}
                </div>
            </div>
    );
}

export default DisplayTable;