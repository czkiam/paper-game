import { selector } from "recoil";
import { GameScore } from "./Atoms";
const PaperSize = selector({
  key: "PaperSize",
  get: ({ get }) => {
    const score = get(GameScore);
    return 100 + score * 5;
  },
});
export { PaperSize };
