import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import Game from './components/Game'
import Gems from "./components/Gems";
import { Score } from "./components/Score";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
      <h1>Paper Click</h1>
      <Score />
      <Gems />
      <Game />
      </div>
    </RecoilRoot>
  );
}

export default App;
