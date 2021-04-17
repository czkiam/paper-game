import React, { MouseEvent } from "react";
import { useRecoilValue } from "recoil";
import { GameScore, useResetScore } from "../store/Atoms";
const Score = () => {
  const score = useRecoilValue(GameScore);
  const reset = useResetScore();

  const resetScore = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reset();
  };
  return (
    <div>
      <h3>Score : {score}</h3>
      <button onClick={resetScore}>Reset</button>
    </div>
  );
};
export { Score };
