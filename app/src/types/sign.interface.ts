import { element, house, modality, sign } from "./types";

export interface Sign {
  name: sign;
  element: element;
  modality: modality;
  naturalHouse: house;
}
