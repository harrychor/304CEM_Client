import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  getBooks() {
    return this.http.get('https://books.google.com.hk/')
    // You can change the IP address by your own
    }
    

  firstClick() {
  return console.log('clicked');
  }
 }
 