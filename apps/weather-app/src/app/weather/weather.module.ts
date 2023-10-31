import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { WeatherService } from 'src/app/weather/infrastucture/services/weather.service'
import { EnvironmentService } from 'src/app/environments.service'

import { WeatherComponent } from 'src/app/weather/infrastucture/components/weather/weather.component'

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
