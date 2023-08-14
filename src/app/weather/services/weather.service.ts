import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'

import { WeatherResponseInterface } from 'src/app/weather/types/weatherResponse.interface'
import { CurrentWeather } from 'src/app/weather/types/weather'
import { EnvironmentService } from 'src/app/environments.service'

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private http: HttpClient,
    private environment: EnvironmentService,
  ) {}

  getCurrentWeather(cityName: string): Observable<CurrentWeather> {
    return this.http
      .get<WeatherResponseInterface>(`${this.environment.apiUrl}/data/2.5/weather`, {
        params: {
          q: cityName,
          appid: this.environment.apiKey,
          units: 'metric',
        },
      })
      .pipe(
        map((data: WeatherResponseInterface) => {
          return {
            name: data.name,
            dt: data.dt,
            weather: data.weather[0].main,
            temperature: data.main.temp,
            wind: data.wind.speed,
            humidity: data.main.humidity,
            cloudy: data.clouds['all'],
          }
        }),
      )
  }
}
