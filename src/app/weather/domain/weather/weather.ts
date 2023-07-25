import { Clouds, Coord, Main, Rain, Sys, WeatherInfo, Wind } from './types'

export class Weather {
  constructor(
    private coord: Coord,
    private weather: WeatherInfo[],
    private base: string,
    private main: Main,
    private visibility: number,
    private wind: Wind,
    private rain: Rain,
    private clouds: Clouds,
    private dt: number,
    private sys: Sys,
    private timezone: number,
    private id: number,
    private name: string,
    private cod: number,
  ) {}
}
