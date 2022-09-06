import React,{useState,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "./Library";
import Feed from "./Feed";
import Favourite from "./Favourite";
import Trendings from "./Trendings";
import Player from "./Player";
import "./Home.css";
import Sidebar from "../components/Sidebar";
import Login from "./auth/Login";
import { setClientToken } from "../Spotify";

const Home = () => {
  const [token,setToken]=useState("");
  useEffect(()=>{
   getToken();
  }); 
  const getToken=()=>{
    const token=window.localStorage.getItem("token");
    const hash=window.location.hash;
    window.location.hash="";
    if(!token && hash){
      const _token=hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token",_token);
      setToken(_token);
      setClientToken(_token);
    }
    else{
      setToken(token);
      setClientToken(token);
    }
  }
  return !token ? (
    <Login />
  ):(
    <BrowserRouter>
      <div className="main-div">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/play" element={<Player />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/trendings" element={<Trendings />} />
        </Routes>
      </div>
    </BrowserRouter>
  ); 
};

export default Home;
