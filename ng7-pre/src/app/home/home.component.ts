import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

interface moiveData{
  imdbID: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})
export class HomeComponent implements OnInit {
  users: Object;
  moives:Object;
  constructor(private data: DataService) { }

  addSearch(newSearch:string){
    if(newSearch!=''){
    this.data.getMoives(`${newSearch}`).subscribe(data=>{
    
    this.moives = data;	
    console.log(this.moives)
    })
    }
    }

  
  
 ngOnInit() {

}

}
