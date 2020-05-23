import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { EventEmitterService } from '../event-emitter.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  constructor(private data: DataService, private router: Router,private eventEmitterService: EventEmitterService) { }

  ngOnInit() { 
  }
  toRegister(event){
    this.router.navigate(['register'])
  }
  
  login(event) {
    event.preventDefault()
    const target = event.target
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    console.log(email, password)
    this.data.Authuser(email,password)
    this.data.getuserData(email)
    this.eventEmitterService.onloginButtonClick()
  }

  
}


