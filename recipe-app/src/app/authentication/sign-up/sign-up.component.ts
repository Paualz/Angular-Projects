import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService } from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @ViewChild('f') newUserForm : NgForm;

  constructor(private authSevice: authService) { }

  ngOnInit() {
  }

  onRegisterUser(){
    let email = this.newUserForm.value['email'];
    let password = this.newUserForm.value['password'];
    this.authSevice.registerUser(email, password);
  }
}
