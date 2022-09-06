import React,{useState,useEffect} from 'react';
import APIKit from "../Spotify";
import "./Library.css";
import {AiFillPlayCircle} from "react-icons/ai";
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';

const Library = () => {
  const [playlists, setPlaylists] = useState(null);
  useEffect(()=>{
    APIKit.get("me/playlists").then((response)=>{
      setPlaylists(response.data.items);
      // console.log(response.data.items);
    });
  },[])
  const navigate=useNavigate();
  const playPlaylist=(id)=>{
    navigate("/play", { state: { id: id } });
  };
  
  return (
    <div className="screen-container">
      <div className='library_playlist'>
        {playlists?.map((playlist)=>(
          <div className='playlist-card' key={playlist.id} onClick={()=>playPlaylist(playlist.id)}>
            <img src={playlist.images[0].url} alt="" className='playlist_image'/>
            <p className='name'>{playlist.name}</p>
            <p className='track'>{playlist.tracks.total} Songs</p>
            <div className='playlist-fade'>
              <IconContext.Provider value={{size:"50px",color:"#E99D72"}}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default Library