import { selector } from "recoil";
import { GameScore } from "./Atoms";

const PaperSize = selector({
  key: "PaperSize",
  get: ({ get }) => {
    const score = get(GameScore);
    return 100 + score * 5;
  },
});

const fetchHighScores = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(333);
      }, 20000);
    });
  };

const HighGameScore = selector({
  key: "HighGameScore",
  get: async ({ get }) => {
    return await fetchHighScores();
  },
});
export { PaperSize, HighGameScore };
