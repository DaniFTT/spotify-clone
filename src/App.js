import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if(_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log(user);
      });
    }


    console.log("i have a token>> ", token);
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <h1>Im logged in</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
