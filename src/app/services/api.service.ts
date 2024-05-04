import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private backendUrl = 'https://localhost:7123'

  constructor(
    private http: HttpClient,
  ) { }

  postLogin(data: any) {
    console.log(data)
    return this.http.post<any>(`${this.backendUrl}/login`, data);
  }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.backendUrl}/WeatherForecast`);
  }
}
