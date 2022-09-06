import React, { useEffect, useState } from 'react'
import "./Player.css"
import {useLocation} from "react-router-dom";
import apiClient from '../Spotify';
import SongCard from '../components/songCard/SongCard';
import Queue from '../components/songCard/Queue';
import Audioplayer from '../components/audioplayer/Audioplayer';
import Widgets from '../components/Widgets';


const Player = () => {
  const location=useLocation();
  // console.log(location);
  const [tracks,setTracks]=useState([]);
  const [currentTrack,setCurrentTrack]=useState({});
  const [currentIndex,setCurrentIndex]=useState(0);

  useEffect(()=>{
    if(location.state){
      apiClient.get("playlists/"+location.state.id+"/tracks")
      .then((res)=>{
        setTracks(res.data.items);
        setCurrentTrack(res.data?.items[0]?.track);
      })
    }
  },[location.state]);
  useEffect(()=>{
    setCurrentTrack(tracks[currentIndex]?.track);
  },[currentIndex, tracks]);
   
  return (
    <div className="screen-container flex">
      <div className='left-player'>
        <Audioplayer 
        currentTrack={currentTrack} 
        isPlaying={true}
        total={tracks}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        />
        <Widgets artistID={currentTrack?.album?.artists[0]?.id}/>
      </div>
      <div className='right-player'>
        <SongCard  album={currentTrack?.album}/>
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
      </div>
    </div>
  )
}

export default Player