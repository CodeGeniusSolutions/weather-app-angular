export interface EnvironmentInterface {
  production: boolean
  apiUrl: string
  apiKey: string
}

const apiUrl = 'https://api.openweathermap.org'
const apiKey = 'e53f7364333f34eb2a77e15dfd685832'

export const environment: EnvironmentInterface = {
  production: false,
  apiUrl,
  apiKey,
}
