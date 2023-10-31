import { WeatherResponseInterface } from '../infrastucture/types/weatherResponse.interface'

type CityName = string

export interface WeatherInfo {
  id: number
  main: string
  description: string
  icon: string
}

export interface Weather {
  id: number
  name: CityName
  date: Date
  temperature: number
  humidity: number
  wind: number
  cloudy: number
  weatherInfo: WeatherInfo
}

interface GetWeatherInterface {
  getWeather: () => Promise<WeatherResponseInterface>
}
