import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { shopListService } from '../shopList.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('IngNameInput') ingName: ElementRef;
  @ViewChild('IngAmountInput') ingAmount: ElementRef;
  @ViewChild('f') ingForm: NgForm; 
  constructor(private shopListService: shopListService) { }

  ngOnInit() {
  }

  onAddIngredients(){
    let ingName = this.ingName.nativeElement.value;
    let ingAmount = this.ingAmount.nativeElement.value;
    let newIngredient = new Ingredient(ingName, ingAmount);
    this.shopListService.addIngredient(newIngredient);
  }

  onSubmitform(){
    console.log(this.ingForm);
  }
  
  onAutoComplete(){
    let suggestedIng = 'Chocolate';
    let suggestedAmount = 3;

    this.ingForm.form.patchValue({
      name: suggestedIng,
      amount: suggestedAmount
    });
  }
}
