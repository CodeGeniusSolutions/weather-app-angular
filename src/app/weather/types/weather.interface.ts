type CityName = string
type CountryCode = string

// http://api.openweathermap.org/geo/1.0/direct?q=Bishkek&appid=e53f7364333f34eb2a77e15dfd685832

export interface CoordinatesByLocationInterface {
  name: CityName
  local_names: Record<CountryCode, CityName>
  lat: number
  lon: number
  country: CountryCode
}

// https://api.openweathermap.org/data/2.5/weather?lat=42.8765615&lon=74.6070079&appid=e53f7364333f34eb2a77e15dfd685832&units=metric

export interface Coord {
  lon: number
  lat: number
}

export interface WeatherInfo {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface Wind {
  speed: number
  deg: number
  gust: number
}

export interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export type Rain = Record<string, number>
export type Clouds = Record<string, number>

export interface CurrentWeatherInterface {
  coord: Coord
  weather: WeatherInfo[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  rain: Rain
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}
