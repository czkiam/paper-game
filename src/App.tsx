import React, { useEffect } from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import Game from "./components/Game";
import Gems from "./components/Gems";
import HighScore from "./components/HighScore";
import { Score } from "./components/Score";
import Spinner from "./components/Spinner";

function App() {
  useEffect(() => {
    // Anything in here is fired on component mount.
    console.log("mount app");
    return () => {
      // Anything in here is fired on component unmount.
      console.log("unmount app");
    };
  }, []);

  return (
    <RecoilRoot>
      <div className="App">
        <h1>Paper Click</h1>
        <React.Suspense fallback={<Spinner />}>
          <HighScore />
        </React.Suspense>
        <Score />
        <Gems />
        <Game />
      </div>
    </RecoilRoot>
  );
}

export default App;
