import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { WeatherService } from 'src/app/weather/services/weather.service'
import { CurrentWeatherInterface } from 'src/app/weather/types/weather.interface'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  currentWeather$?: Observable<CurrentWeatherInterface>

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.currentWeather$ = this.weatherService.getCurrentWeather('Bishkek')
  }
}