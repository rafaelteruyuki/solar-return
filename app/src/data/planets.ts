import { Planet } from "../types/planet.interface";

const PLANETS: Planet[] = [
  {
    name: 'Sun',
    domicile: ['Leo'],
    detriment: ['Aquarius'],
    exaltation: ['Aries'],
    fall: ['Libra']
  },
  {
    name: 'Moon',
    domicile: ['Cancer'],
    detriment: ['Capricorn'],
    exaltation: ['Taurus'],
    fall: ['Scorpio']
  },
  {
    name: 'Mercury',
    domicile: ['Gemini', 'Virgo'],
    detriment: ['Sagittarius', 'Pisces'],
    exaltation: ['Aquarius'],
    fall: ['Leo']
  },
  {
    name: 'Venus',
    domicile: ['Taurus', 'Libra'],
    detriment: ['Scorpio', 'Aries'],
    exaltation: ['Pisces'],
    fall: ['Virgo']
  },
  {
    name: 'Mars',
    domicile: ['Aries', 'Scorpio'],
    detriment: ['Libra', 'Taurus'],
    exaltation: ['Capricorn'],
    fall: ['Cancer']
  },
  {
    name: 'Jupiter',
    domicile: ['Sagittarius', 'Pisces'],
    detriment: ['Gemini', 'Virgo'],
    exaltation: ['Cancer'],
    fall: ['Capricorn']
  },
  {
    name: 'Saturn',
    domicile: ['Capricorn', 'Aquarius'],
    detriment: ['Cancer', 'Leo'],
    exaltation: ['Libra'],
    fall: ['Aries']
  },
  {
    name: 'Uranus',
    domicile: ['Aquarius'],
    detriment: ['Leo'],
    exaltation: ['Scorpio'],
    fall: ['Taurus']
  },
  {
    name: 'Neptune',
    domicile: ['Pisces'],
    detriment: ['Virgo'],
    exaltation: ['Cancer'],
    fall: ['Capricorn']
  },
  {
    name: 'Pluto',
    domicile: ['Scorpio'],
    detriment: ['Taurus'],
    exaltation: ['Leo'],
    fall: ['Aquarius']
  }
];

export default PLANETS;
