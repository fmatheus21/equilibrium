import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private jsonContactRepresentative = './assets/json/representante.json';
  private jsonContactUs = './assets/json/fale-conosco.json';
  private welcome = './assets/json/bem-vindo.json';

  constructor(private http: HttpClient) {
  }

  findContactRepresentative(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonContactRepresentative);
  }

  findContactUs(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonContactUs);
  }

  findWelcome(): Observable<any[]> {
    return this.http.get<any[]>(this.welcome);
  }

}
