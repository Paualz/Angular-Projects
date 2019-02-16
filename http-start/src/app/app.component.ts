import { Component } from '@angular/core';
import { serversService } from './servers.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor (private serversService: serversService) {}
  
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onSave(){
    this.serversService.storeServers(this.servers) //Here, we subscribe to really send the request.
    .subscribe(
      (response)=>console.log(response),
      (error)=> console.log(error)
    );
  }

  onGetServer(){
    this.serversService.getServers()
    .subscribe(
      (response:Response)=>{
        const data = response.json(); //turns the response into a Js objects -JSON-
        console.log(data);
      },
      (error)=> console.log(error) 
    );
  }
}
