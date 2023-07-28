import { Injectable } from '@angular/core'
import { EnvironmentInterface, environment } from 'environments/environment'

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService implements EnvironmentInterface {
  get production(): boolean {
    return environment.production
  }

  get apiUrl(): string {
    return environment.apiUrl
  }

  get apiKey(): string {
    return environment.apiKey
  }
}
