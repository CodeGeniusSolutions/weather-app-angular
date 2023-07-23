import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { WeatherComponent } from 'src/app/weather/infrastructure/view/weather/weather.component'

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
})
export class WeatherModule {}
