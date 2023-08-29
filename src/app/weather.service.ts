import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

   url = 'https:// api.openweathermap.org/data/2.5/ ';
   apiKey = '9d95b2755371e7037f9e5025e23cb2ed';
  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
      const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', this.apiKey);

      return this.http.get<Weather>(this.url + 'weather', {params: options});
  }

}
