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
  ingredientToEdit: Ingredient;
  editedIngredientId: number;
  ingName: string;
  ingAmount;
  submittedForm = false;
  editMode = false;
  @ViewChild('f') ingForm: NgForm; 
  constructor(private shopListService: shopListService) { }

  ngOnInit() {
    this.shopListService.startedEditing
    .subscribe(
      (index: number)=>{
        this.editMode = true;
        this.editedIngredientId = index;
        this.ingredientToEdit = this.shopListService.getIngredient(this.editedIngredientId);
        this.ingForm.form.setValue({
          name: this.ingredientToEdit.name,
          amount: this.ingredientToEdit.amount
        });

      }
    );
  }


  onSubmitform(){    
    this.ingName = this.ingForm.value.name;
    this.ingAmount = +this.ingForm.value.amount;
    let newIngredient = new Ingredient(this.ingName, this.ingAmount);
    if(this.editMode){
      console.log('works');
      console.log(this.editedIngredientId);
      console.log(newIngredient);
      this.shopListService.editIngredient(this.editedIngredientId, newIngredient);
    }else{
      this.submittedForm = true;
     
      this.shopListService.addIngredient(newIngredient);
    }

  }
  
  onAutoComplete(){
    let suggestedIng = 'Chocolate';
    let suggestedAmount = 3;

    this.ingForm.form.patchValue({
      name: suggestedIng,
      amount: suggestedAmount
    });
  }

  onDeleteIng(){
    this.shopListService.deleteIngredient(this.editedIngredientId);
    this.onClearForm();
  }

  onClearForm(){
    this.editMode = false;
    this.ingForm.reset();
  }
}
