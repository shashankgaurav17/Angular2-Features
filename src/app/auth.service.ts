import { Response } from '@angular/http';
import * as firebase from 'firebase';
import { error } from 'selenium-webdriver';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{

    constructor(private route: Router){}

    token:any;

    onsignUp(email:string, password:string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                (error) => console.log(error)
            )
    }

    onLogin(email:string,password:string){
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(
                (response: Response) => {
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token:string) => {
                                this.token = token;
                                this.route.navigate(['/home']);
                            }
                        )
                }
            )
            .catch(
                (error: Response) => console.log(error)
            )
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
            .then(
                (token : string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated(){
        return this.token !=null;
    }

    onLogout(){
        firebase.auth().signOut();
        this.token = null;
    }
}