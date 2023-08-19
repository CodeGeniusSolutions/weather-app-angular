import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { CurrentWeatherInterface } from 'src/app/weather/types/weather.interface'
import { EnvironmentService } from 'src/app/environments.service'

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private http: HttpClient,
    private environment: EnvironmentService,
  ) {}

  getCurrentWeather(cityName: string): Observable<CurrentWeatherInterface> {
    return this.http.get<CurrentWeatherInterface>(`${this.environment.apiUrl}/data/2.5/weather`, {
      params: {
        q: cityName,
        appid: this.environment.apiKey,
        units: 'metric',
      },
    })
  }
}
