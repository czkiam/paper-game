import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { HighGameScore } from "../store/Selectors";
const HighScore = () => {
  const highGameScore = useRecoilValue(HighGameScore);

  useEffect(() => {
    console.log(`highGameScore: ${highGameScore}`);
    return () => {
      //cleanup
      console.log(`highGameScore cleanup: ${highGameScore}`);
    };
  }, [highGameScore]);
  return (
    <React.Fragment>
      <h3>High Score: {highGameScore}</h3>
    </React.Fragment>
  );
};
export default HighScore;
