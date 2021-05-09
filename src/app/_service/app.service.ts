import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private jsonContactRepresentative = './assets/json/contact-representative.json';
  private jsonContactUs = './assets/json/contact-us.json';
  private welcome = './assets/json/welcome.json';
  private featured = './assets/json/featured.json';
  private service = './assets/json/service.json';
  private fluid = './assets/json/fluid.json';
  private footer = './assets/json/footer.json';



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

  findFeatured(): Observable<any[]> {
    return this.http.get<any[]>(this.featured);
  }

  findService(): Observable<any[]> {
    return this.http.get<any[]>(this.service);
  }

  findFluid(): Observable<any[]> {
    return this.http.get<any[]>(this.fluid);
  }

  findFooter(): Observable<any[]> {
    return this.http.get<any[]>(this.footer);
  }

}
