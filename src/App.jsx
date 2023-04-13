import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import './App.css';

import Header from './components/Header';
import DisplayTable from './components/DisplayTable';
import SongDetails from './components/SongDetails';

function App() {
  const [songsArray, setSongsArray] = useState([]);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const CLIENT_ID = '5f003b83688d434a884e22441ae85f4f';
  const REDIRECT_URI = 'https://hearmy10.netlify.app';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';

  useEffect(() => {
    const hash = window.location.hash;
    let token = Cookies.get("token");

    if(!token && hash){
      token = hash.substring(1).split('&').find(element => element.startsWith("access_token")).split('=')[1];
      
      window.location.hash = "";
      Cookies.set("token", token);
    }
    console.log(token);
    setToken(token);
  },[])

  useEffect(() => {
    // Attach event listener to the beforeunload event
    const handleBeforeUnload = () => {
      window.localStorage.clear(); // Clear localStorage
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const playlistId = '2oDD4i8Z5cSF8RXpb9kF1b';

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=25`, {
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(response => {
      setSongsArray(response);
      console.log(response);
    })
    .catch(error => {
      console.log("Error");
    })
  }, [token]);

  return (
      <div className="App">
        { !token ?
        <a href= {`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a> : 
        null
        }
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<DisplayTable songs={songsArray} />} />  
            <Route path="/song/:id" element={<SongDetails songs={songsArray} />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
