export interface Entry {
    id: number,
    date: string,
    weather: string,
    visibility: string
}

export type Visibility = 'great' | 'good' | 'ok' | 'poor'
export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'stormy' | 'windy'