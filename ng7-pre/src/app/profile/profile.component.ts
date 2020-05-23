import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userDisplayName: string;

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    
  }
  update(event){
    event.preventDefault()
    const target = event.target
    const Nusername = target.querySelector('#Nusername').value
    console.log(Nusername)
    this.data.updateuserDate(Nusername)
    this.ngOnInit()
  }
}
