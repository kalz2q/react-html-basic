import React from 'react';
import cloud from './img/cloud.svg';
import cloud2 from './img/cloud02.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={cloud} width="100px" alt="cloud.svg"></img>       
        <img src={require("./img/tenshi.JPG")} alt="tenshiiii"></img>
        <img src={cloud} alt="cloud.svg"></img>
        <img src={cloud2} alt="cloud.png"></img>
        <img src={require("./img/cloud02.png")} alt="png"></img>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

    </div>
  );
}

export default App;
