import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import{ConfirmationPopoverModule} from 'angular-confirmation-popover';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private data: DataService) { }
  i:Number;
  moives:Object;
  ngOnInit(): void {
    this.data.getFavData().subscribe(data=>{
      this.moives = data;	
      console.log(this.moives)
      
      })
  }
  delFav(i:number){
    console.log(this.moives[i]['_id'])
    const delID = this.moives[i]['_id']
    //window.alert();
    //this.data.delFavData(delID)
  }
}
