import BirthChart from "./BirthChart";
import { HousesInChart } from "./types/houses-in-chart.interface";
import { PlanetsInChart } from "./types/planets-in-chart.interface";

const houses: HousesInChart = {};
const planets: PlanetsInChart = {
  sun: {
    sign: {
      name: 'Pisces',
      element: 'water',
      modality: 'mutable',
      naturalHouse: 12
    },
    house: 8,
    aspects: [
      {
        type: 'conjunction',
        planet: {
          name: 'Venus',
          
        }
      }
    ]
  }
};

const birthChart = new BirthChart();