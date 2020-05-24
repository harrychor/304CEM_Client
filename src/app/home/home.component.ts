import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Title } from '@angular/platform-browser';

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

  addFav(i:number){
    console.log(this.moives[i])
    const Title = this.moives[i]['Title']
    const Year = this.moives[i]['Year']
    const imdbID = this.moives[i]['imdbID']
    const Poster = this.moives[i]['Poster']
    this.data.addFavData(Title,Year,imdbID,Poster)
  }
  
  
 ngOnInit() {

}

}
