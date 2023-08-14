import { WeatherResponseInterface } from './weatherResponse.interface'

export type CurrentWeather = Pick<WeatherResponseInterface, 'name' | 'dt'> & {
  weather: string
  temperature: number
  wind: number
  humidity: number
  cloudy: number
}
