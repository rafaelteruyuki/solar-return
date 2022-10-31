import { Planet } from "./planet.interface";
import { Sign } from "./sign.interface"

interface HouseInChart {
  sign: Sign;
  planetsIn: Planet[];
}

export interface HousesInChart {
  house1: HouseInChart;
  house2: HouseInChart;
  house3: HouseInChart;
  house4: HouseInChart;
  house5: HouseInChart;
  house6: HouseInChart;
  house7: HouseInChart;
  house8: HouseInChart;
  house9: HouseInChart;
  house10: HouseInChart;
  house11: HouseInChart;
  house12: HouseInChart;
}
