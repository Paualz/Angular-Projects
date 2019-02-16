import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class serversService{
    constructor(private http: Http){}
   
     storeServers(servers: any[]){ //we get an array of servers.any type.
       return this.http.post(
            'https://myng-http.firebaseio.com/data.json', //link to my firebase project
            servers
            );
    } //So, angular creates an observable that needs to be listened to.
    getServers(){
        return this.http.get(
            'https://myng-http.firebaseio.com/data.json '
        );
    }
}