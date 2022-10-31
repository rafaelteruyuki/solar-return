import { planet, sign } from "./types";

export interface Planet {
  name: planet;
  domicile: sign[];
  exaltation: sign[];
  detriment: sign[];
  fall: sign[];
}
