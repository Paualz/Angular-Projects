import { Component, OnInit} from '@angular/core';
import { recipeService } from '../recipe-book/recipe.service';
import { recipeServerService } from '../shared/recipeServer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private recipeServerService: recipeServerService,
              private recipeService: recipeService) { }   

  ngOnInit() {
  }

  onSaveData(){
    this.recipeServerService.storeRecipes()
    .subscribe(
      (response)=>{
        let data = response;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  onFetchData(){
    this.recipeServerService.getRecipes();
    //The subscription is made in the servers service.
  }
}
