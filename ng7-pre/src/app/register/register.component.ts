import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  Register(event){
    event.preventDefault()
    const error = []
    const target = event.target
    const username = target.querySelector('#username').value
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    const cpassword = target.querySelector('#cpassword').value

    if (password != cpassword){
      error.push("Password not match")
    }else{
    console.log(username, email, password)
    this.data.Registeruser(email,password)
    this.data.GenUserProfile(username,email)
    this.router.navigate([''])
  }
  }

}
