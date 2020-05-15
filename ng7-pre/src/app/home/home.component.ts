import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Object;
  books:Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getBooks().subscribe(data=>{
    this.books = data
    console.log(this.books)
    })
    }
   

  firstClick() {
    this.data.firstClick();

 }


}
