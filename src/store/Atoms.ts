import { atom, useRecoilState } from "recoil";

const GameScore = atom({
  key: "GameScore",
  default: 0,
});

const useResetScore = () => {
  const [score, setScore] = useRecoilState(GameScore);
  return () => {
    setScore(0);
  };
};

export { GameScore, useResetScore };
