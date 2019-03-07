import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class authService {
    token: string;
    
    constructor(private router: Router){}

    registerUser(email:string, password:string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            error => console.log(error)
        )
    }

    signUserIn(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response =>{
            this.router.navigate(['home-recipes']);    //We know we're signed in already.
            firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            )
            
            }
        )
        .catch (
            error => console.log(error)
        );
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (token: string) => this.token = token
        );
        return this.token;
    }

    isAuthenticated(){
        return this.token != null;
    }

    logOut(){
        firebase.auth().signOut();
        this.token = null;
    }
}