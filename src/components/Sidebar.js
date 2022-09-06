import React,{useState,useEffect} from 'react'
import "./Sidebar.css"; 
import SidebarButton from "./SidebarButton";
import {FaPlay} from "react-icons/fa";
import {FaGripfire} from "react-icons/fa";
import {AiFillHeart} from "react-icons/ai";
import {IoLibrary} from "react-icons/io5";
import {MdSpaceDashboard} from "react-icons/md";
import {FaSignOutAlt} from "react-icons/fa";
import apiClient from '../Spotify';

const Sidebar = () => {
  const [image,setImage]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU");
  useEffect(()=>{
    apiClient.get("me").then((response)=>{
      setImage(response.data.images[0].url);
    //  console.log(response.data.images);
    })
  })
  return (
    <div className="sidebar-container">
      <img src={image} className="profile-image" alt="profile"/>
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
        <SidebarButton title="Trending" to="/trendings" icon={<FaGripfire/>}/>
        <SidebarButton title="Player" to="/play" icon={<FaPlay/>}/>
        <SidebarButton title="Favourites" to="/favourite" icon={<AiFillHeart/>}/>
        <SidebarButton title="Library" to="/" icon={<IoLibrary/>}/>
      </div>
      <SidebarButton title="Sign Out" to="/sign-out" icon={<FaSignOutAlt/>}/>
    </div>
  )
}

export default Sidebar