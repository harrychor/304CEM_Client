import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Register(event){
    event.preventDefault()
    const error = []
    const target = event.target
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    const cpassword = target.querySelector('#cpassword').value

    if (password != cpassword){
      error.push("Password not match")
    }

    if (error.length>0) {

    }
  }

}
