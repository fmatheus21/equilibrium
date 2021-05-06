import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private readonly apiUrl = `${environment.apiUrl}`;
  private errorData: {};

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  sendContactUs(data: any): Observable<any> {
    return this.http.post(this.apiUrl + '/mail/send-mail-contactus.php', data, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {

    return throwError(error);
    /* if (error.error instanceof ErrorEvent) {
       console.error('An error occurred:', error.error.message);
     } else {
       console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
     }
     this.errorData = {
       errorTitle: 'Oops! Request for document failed',
       errorDesc: 'Something bad happened. Please try again later.'
     };
 
     return throwError(this.errorData);*/

  }

}
