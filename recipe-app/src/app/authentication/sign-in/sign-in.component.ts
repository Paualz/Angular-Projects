import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService } from '../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('f') userForm : NgForm;
  constructor(private auth: authService) { }

  ngOnInit() {

  }
  
  onSubmitUser(){
    let email = this.userForm.value['email'];
    let password = this.userForm.value['password'];
    this.auth.signUserIn(email, password);
  }
  
}
