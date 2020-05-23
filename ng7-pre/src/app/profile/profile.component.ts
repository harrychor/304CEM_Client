import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';
import { EventEmitterService } from '../event-emitter.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userDisplayName: string;

  constructor(private data:DataService,private router: Router,private eventEmitterService: EventEmitterService) { }

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
  Logout(event){
    event.preventDefault()
    const target = event.target
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate([''])
    this.eventEmitterService.onloginButtonClick()
  }

}
