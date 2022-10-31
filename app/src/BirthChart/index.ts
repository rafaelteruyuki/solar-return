import { HousesInChart } from "../types/houses-in-chart.interface";
import { PlanetsInChart } from "../types/planets-in-chart.interface";

export default class BirthChart {
  private planets: PlanetsInChart;
  private houses: HousesInChart;
  
  constructor(planets: PlanetsInChart, houses: HousesInChart) {
    this.planets = planets;
    this.houses = houses;
  }

  
}