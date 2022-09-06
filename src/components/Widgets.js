import React,{useEffect, useState} from 'react'
import "./Widgets.css";
import WidgetsCard from "./WidgetsCard";
import apiClient from '../Spotify';

const Widgets = ({artistID}) => {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  useEffect(()=>{
    if (artistID) {
        apiClient
          .get(`/artists/${artistID}/related-artists`)
          .then((res) => {
            const a = res.data?.artists.slice(0, 3);
            setSimilar(a);
          })
          .catch((err) => console.error(err));
  
        apiClient
          .get(`/browse/featured-playlists`)
          .then((res) => {
            const a = res.data?.playlists.items.slice(0, 3);
            setFeatured(a);
          })
          .catch((err) => console.error(err));
  
        apiClient
          .get(`/browse/new-releases`)
          .then((res) => {
            const a = res.data?.albums.items.slice(0, 3);
            setNewRelease(a);
          })
          .catch((err) => console.error(err));
      }
    
  },[artistID])

  return (
    <div className='widgets flex'>
        <WidgetsCard title="Similar Artists" similar={similar}/>
        <WidgetsCard title="Made For You" featured={featured}/>
        <WidgetsCard title="New Releases" newRelease={newRelease}/>
    </div>
  )
}

export default Widgets