import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, map } from 'rxjs'

import { CoordinatesByLocationInterface, CurrentWeatherInterface } from '../domain/weather/types'
import { EnvironmentService } from './environments.service'
import { WeatherRepository } from '../application/weather/weather'

@Injectable({
  providedIn: 'root',
})
export class WeatherService implements WeatherRepository {
  private geo?: CoordinatesByLocationInterface

  constructor(
    private http: HttpClient,
    private environment: EnvironmentService,
  ) {}

  getCoordsByLocation(cityName: string): Observable<CoordinatesByLocationInterface> {
    return this.http.get<CoordinatesByLocationInterface>(
      `${this.environment.apiUrl}/geo/1.0/direct?q=${cityName}&appid=${this.environment.apiKey}`,
    )
  }

  getCurrentWeather(): Observable<CurrentWeatherInterface> {
    return this.http.get<CurrentWeatherInterface>(
      `${this.environment.apiUrl}/data/2.5/weather?lat=${this.geo?.lat}&lon=${this.geo?.lon}&appid=${this.environment.apiKey}&units=metric`,
    )
  }
}
