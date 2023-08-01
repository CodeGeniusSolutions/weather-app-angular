import { Component, OnInit } from '@angular/core'
import { WeatherService } from '../weather.service'
import { CurrentWeatherInterface } from '../types/weather.interface'
import { Observable } from 'rxjs'

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
