import { CoordinatesByLocationInterface, CurrentWeatherInterface } from '../../domain/weather/types'
import { Observable } from 'rxjs'

export interface WeatherRepository {
  getCoordsByLocation(cityName: string): Observable<CoordinatesByLocationInterface>
  getCurrentWeather(): Observable<CurrentWeatherInterface>
}
