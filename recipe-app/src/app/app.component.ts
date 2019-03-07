import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipe-app';
  destination = '';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDXaiYR0P1bWg4nv3ffbjJixXWu_anGo7M",
      authDomain: "ng-recipe-app-222.firebaseapp.com"  
    }); //this expects a JS object and the info can be retrieved from the backend.
  }
  onNavigate(option:string){
    this.destination = option;
  }
}
