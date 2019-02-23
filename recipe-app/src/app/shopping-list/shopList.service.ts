import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class shopListService {
    ingredientsChanged = new Subject<Ingredient[]>();

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
}