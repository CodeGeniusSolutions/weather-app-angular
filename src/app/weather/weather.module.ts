import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { WeatherComponent } from 'src/app/weather/components/weather.component'
import { WeatherService } from './weather.service'
import { EnvironmentService } from '../environments.service'

const routes: Routes = [
  {
    path: '',
    component: WeatherComponent,
  },
]
@NgModule({
  declarations: [WeatherComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [WeatherService, EnvironmentService],
})
export class WeatherModule {}
