import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
constructor(private http: HttpClient) { }

  getMoives(word:string) {
    return this.http.get(`http://localhost:3000/moive/${word}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
    }
    

  firstClick() {
  return console.log('clicked');
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
 }
 