import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';  

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  userDisplayName: string;
  loginDP: boolean
  userDP: boolean
  appTitle: string = 'myapp';

  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    this.loginDP = true
    this.loginFunction()
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeloginFunction.subscribe((name:string) => {    
        this.loginFunction();    
      });
    
  }
}
  loginFunction() {
    if (localStorage.getItem('loggedIn') != null){
      this.userDisplayName = sessionStorage.getItem('loggedUser');
      this.loginDP = false
      this.userDP = true
    } else{
      this.loginDP = true
      this.userDP = false
    }
  }
  
}

