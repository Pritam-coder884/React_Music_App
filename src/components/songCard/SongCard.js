import React from 'react'
import "./SongCard.css";
import AlbumInfo from './AlbumInfo';
import AlbumImage from "./AlbumImage";

const SongCard = ({album}) => {
  return (
    <div className='song-card flex'>
      <AlbumImage url={album?.images[0]?.url}/>
      <AlbumInfo album={album}/>
    </div>
  )
}

export default SongCard