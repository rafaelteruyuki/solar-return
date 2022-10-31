import { Planet } from "./planet.interface";
import { Sign } from "./sign.interface";
import { aspect, house } from "./types";

interface AspectInChart {
  type: aspect;
  planet: Planet;
}

interface PlanetInChart {
  sign: Sign;
  degree: string;
  house: house;
  aspects: AspectInChart[];
}

export interface PlanetsInChart {
  sun: PlanetInChart;
  moon: PlanetInChart;
  mercury: PlanetInChart;
  mars: PlanetInChart;
  venus: PlanetInChart;
  jupiter: PlanetInChart;
  saturn: PlanetInChart;
  neptune: PlanetInChart;
  uranus: PlanetInChart;
  pluto: PlanetInChart;
}
