import React from 'react'
import "./AlbumInfo.css";

const AlbumInfo = ({album}) => {
  // console.log(album);

  return (
    <div className='info-card'>
       <div className='moving-container'>
        <div className='moving'>
         <p className='name'>{album?.name} by {album?.artists[0]?.name}</p>
        </div>
       </div>
     
      
        <p className='album-info'>{`${album?.name} is an ${album?.album_type} by ${album?.artists[0]?.name} with ${album?.total_tracks} tracks`}</p>
      
     
        <p className='release-date'>Release Date: {album?.release_date}</p>
    </div>
  )
}

export default AlbumInfo