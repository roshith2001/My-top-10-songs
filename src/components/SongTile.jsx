import React from 'react';
import { Link } from 'react-router-dom';

const SongTile = (props) => {

    const { id, name, image, number} = props;
    return(
            <div className='w-1/3 p-2 sm:w-1/4 bg-zinc-300 m-4
                rounded-sm'>
                <Link to={`/song/${number}`}>
                    <img src={image} alt='Song Tile' 
                        className='object-cover'></img>
                    <p className='text-zinc-900 text-center py-2 
                        font-sans'>{name}</p>
                </Link>
            </div>

    );
}
export default SongTile;