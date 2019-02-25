import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shopListService } from './shopList.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription;
   
  constructor(private shopListService: shopListService) { }

  ngOnInit() {
    this.ingredients = this.shopListService.getIngredients();
    this.subscription = this.shopListService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[])=>{ //We are subscribing to the changes in the
        // ingredient array, back in the SL service, and replacing the array we've got here.
        this.ingredients = ingredients; 
      }
    );
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onEditItem(index: number){
    this.shopListService.startedEditing.next(index);
  }
}
