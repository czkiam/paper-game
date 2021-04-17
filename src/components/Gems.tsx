import React from "react";
import { useRecoilValue } from "recoil";
import { GameScore } from "../store/Atoms";
const Gems = () => {
  const score = useRecoilValue(GameScore);

  return (
    <div>
      {[...Array(score)].map((n, i) => {
        return (
          <span key={i} role="img" aria-label="gem">
            💎
          </span>
        );
      })}
    </div>
  );
};
export default Gems;
