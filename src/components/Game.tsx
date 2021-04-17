import React, { MouseEvent, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { GameScore } from "../store/Atoms";
import { PaperSize } from "../store/Selectors";
import "./Game.css";

const Game = () => {
  const [score, setScore] = useRecoilState(GameScore);

  const size = useRecoilValue(PaperSize);

  const paperClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setScore(score + 1);
  };

  useEffect(() => {
    //effect
    console.log(`score: ${score}, size: ${size}`);
    return () => {
      //   cleanup
      console.log(`cleanup score: ${score}, size: ${size}`);
    };
  }, [score, size]);

  useEffect(() => {
    //effect
    console.log(`loaded: ${score}, size: ${size}`);
    return () => {
      //   cleanup
      console.log(`cleanup: ${score}, size: ${size}`);
    };
  }, []);

  return (
    <div>
      <button className="paper" onClick={paperClick} style={{ fontSize: size }}>
        🧻
      </button>
    </div>
  );
};
export default Game;
