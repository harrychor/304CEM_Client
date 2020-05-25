import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  showModal: boolean;

  constructor(private data: DataService) { }
  i:Number;
  moives:Object;
  hide(){this.showModal = false;}
  open(i:number){this.showModal = true;
  sessionStorage.setItem('deleteID',i.toString());
  }

  ngOnInit(): void {
    
    this.data.getFavData().subscribe(data=>{
      this.moives = data;	
      console.log(this.moives)
      
      })
  }
  delFav(){
    const i = sessionStorage.getItem('deleteID');
    console.log(this.moives[i]['_id'])
    const delID = this.moives[i]['_id']
    this.data.delFavData(delID)
    this.hide()
    //window.alert();
   
  }
}
