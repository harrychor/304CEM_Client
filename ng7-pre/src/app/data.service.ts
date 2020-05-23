import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

interface myData{
  token: string
  email: string
  message:string
}
interface userdata{
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
constructor(private http: HttpClient, private router: Router ,private authservice: AuthService) { }


//Auth user  
  Authuser(email, password){
    let authorizationData = 'Basic '+  btoa(`${email}:${password}`);

    const httpOptions = new  HttpHeaders()
	  .set('Content-type', 'application/json')
	  .set('Authorization',`${authorizationData}`)
    .set('X-Requested-With', 'HttpRequest')

    console.log(JSON.stringify(httpOptions));


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
      this.getuserData(email);
      this.router.navigate(['profile'])
    }else{
      window.alert(data.message)
    }
  })
  }
//register user
  Registeruser(email, password){
    const httpOptions = new  HttpHeaders()
	  .set('Content-type', 'application/json')
    .set('X-Requested-With', 'HttpRequest')

  return this.http.post<myData>('https://cors-anywhere.herokuapp.com/https://harrychor304cembackend.herokuapp.com/register',{
    'email':`${email}`,
    'password':`${password}`
  },{headers:httpOptions}).pipe(
    retry(1),
    catchError(this.handleError))
  .subscribe(data => {
    console.log(data," is what we got from the server")
    if (data = null){
      this.authservice.setLoggedIn(true);
      
    }
  })
  }
//create user profile
  GenUserProfile(username, email){
    const httpOptions = new  HttpHeaders()
	  .set('Content-type', 'application/json')
    .set('X-Requested-With', 'HttpRequest')

  return this.http.post<myData>('https://cors-anywhere.herokuapp.com/https://harrychor304cembackend.herokuapp.com/userprofile',{
    'username':`${username}`,
    'email':`${email}`
  },{headers:httpOptions}).pipe(
    retry(1),
    catchError(this.handleError))
  .subscribe(data => {
    console.log(data," is what we got from the server")
  })
  }

//get user data
  getuserData(email){
    const httpOptions = new  HttpHeaders()
	  .set('Content-type', 'application/json')
    .set('X-Requested-With', 'HttpRequest')
    return this.http.get<userdata>(`https://cors-anywhere.herokuapp.com/https://harrychor304cembackend.herokuapp.com/userprofile/${email}`).pipe(
      retry(1),
      catchError(this.handleError),
      ).subscribe(data =>{
        console.log(data)
        console.log(data[0]['username'])
        sessionStorage.setItem('email', data[0]['email']);
        sessionStorage.setItem('loggedUser', data[0]['username']);
      });
  }
//update user data
  updateuserDate(username){
    const httpOptions = new  HttpHeaders()
	  .set('Content-type', 'application/json')
    .set('X-Requested-With', 'HttpRequest')
    const email = sessionStorage.getItem('email')
    sessionStorage.setItem('loggedUser', username);
    return this.http.put<userdata>(`https://cors-anywhere.herokuapp.com/https://harrychor304cembackend.herokuapp.com/userprofile/${email}`,{
      'username':`${username}`
    }).pipe(
      retry(1),
      catchError(this.handleError),
      ).subscribe(data =>{
        console.log(data)
      });
  }


//get moive
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
 