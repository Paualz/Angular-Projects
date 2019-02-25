import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class shopListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
    new Ingredient(
        'Flour',
        1
    ),
    new Ingredient(
        'M&Ms',
        100
    )
    ];

    getIngredients(){
        return this.ingredients.slice();

    }
    addIngredient(newIngredient: Ingredient){
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(recipeIngredients: Ingredient[]){
        this.ingredients = this.ingredients.concat(recipeIngredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredient(index:number){
        return this.ingredients[index];
        
    }

    editIngredient(editedIngredientId: number, editedIngredient: Ingredient){
        this.ingredients[editedIngredientId] = editedIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());


    }
    
    deleteIngredient(index:number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}