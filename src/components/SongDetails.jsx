import React, { useEffect, useRef } from 'react';
import SongDetailTable from './SongDetailTable';
import { useParams } from 'react-router-dom';


const SongDetails = ( props ) => {

  const audioRef = useRef(null);
    
  const { id } = useParams();
  const song = { id };
  const arrayItem = props.songs.items[song.id];
  const durationMs = arrayItem.track.duration_ms;
  const min = Math.floor(durationMs/60000);
  const sec = Math.floor((durationMs%60000)/1000);
  const timeString = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')} minutes`;

  useEffect(() => {
    const audioElement = audioRef.current;

    audioElement.play();
    
  }, []);
  
  if (!props.songs.items || props.songs.items.length === 0) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <audio ref={audioRef} src={arrayItem.track.preview_url}>
        Your Browser Won't Support this
      </audio>
      <div className='flex flex-col md:flex-row'>
        <div className="flex flex-shrink justify-center bg-zinc-900
          p-12 md:p-0 md:px-6">
          <img 
            src={ arrayItem.track.album.images[0].url}   
            alt="Song's Cover Image" 
            className="rounded-lg object-cover max-w-sm" />
        </div>
        <div className='bg-zinc-900 flex flex-col w-full flex-wrap
          items-center flex-grow px-6 text-zinc-200 text-center'>
          <h1 className='
            font-display font-bold text-3xl/[2] mb-8
             w-full bg-zinc-500'>
            { arrayItem.track.name.toUpperCase() }
          </h1>
          <table className='table-auto w-full text-l font-display'>
            <tbody>
              <SongDetailTable rowHeading='Artist'
                rowBody={arrayItem.track.artists.map((artist) => artist.name).join(', ')} />
              <SongDetailTable rowHeading='Album'
                rowBody={ arrayItem.track.album.name } />
              <SongDetailTable rowHeading='Duration'
                rowBody={ timeString } />
              <SongDetailTable rowHeading='Released'
                rowBody={ arrayItem.track.album.release_date } />
            </tbody>
          </table>
        </div>
    </div>
  </div>
  );
}

export default SongDetails;