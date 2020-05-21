import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

interface myData{
  token: string
  message:string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
constructor(private http: HttpClient, private router: Router ,private authservice: AuthService) { }


  
  Authuser(email, password){
    let authorizationData = 'Basic '+  btoa(`${email}:${password}`);

    const httpOptions = new  HttpHeaders()
	  .set('Content-type', 'application/json')
	  .set('Authorization',`${authorizationData}`)
    .set('X-Requested-With', 'HttpRequest')

    console.log(JSON.stringify(httpOptions));

    const cors = 'https://cors-anywhere.herokuapp.com/';
  return this.http.post<myData>('https://cors-anywhere.herokuapp.com/https://harrychor304cembackend.herokuapp.com/auth',{
    'email':`${email}`,
    'password':`${password}`
  },{headers:httpOptions}).pipe(
    retry(1),
    catchError(this.handleError))
  .subscribe(data => {
    console.log(data," is what we got from the server")
    console.log(data.token)
    if (data.token != null){
      this.authservice.setLoggedIn(true);
      this.router.navigate(['contact'])
    }else{
      window.alert(data.message)
    }
  })
  }

  Registeruser(email, password){
    let authorizationData = 'Basic '+  btoa(`${email}:${password}`);

    const httpOptions = new  HttpHeaders()
	  .set('Content-type', 'application/json')
	  .set('Authorization',`${authorizationData}`)
    .set('X-Requested-With', 'HttpRequest')

    console.log(JSON.stringify(httpOptions));

    const cors = 'https://cors-anywhere.herokuapp.com/';
  return this.http.post<myData>('https://cors-anywhere.herokuapp.com/https://harrychor304cembackend.herokuapp.com/register',{
    'email':`${email}`,
    'password':`${password}`
  },{headers:httpOptions}).pipe(
    retry(1),
    catchError(this.handleError))
  .subscribe(data => {
    console.log(data," is what we got from the server")
    console.log(data.token)
    if (data.token != null){
      this.authservice.setLoggedIn(true);
      this.router.navigate(['home'])
    }else{
      window.alert(data.message)
    }
  })
  }


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
 