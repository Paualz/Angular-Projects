import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shopListService } from '../shopping-list/shopList.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class recipeService{
    id: number;
    startedEditingRecipe = new Subject<number>();
    recipesChanged = new Subject<Recipe[]>();

    constructor(private shopListService: shopListService){}

private recipes: Recipe[] = [
    new Recipe(
        'Cookies',
        'M&Ms cookies.',
        'https://lilluna.com/wp-content/uploads/2017/10/mandm-cookies-resize-4.jpg',
        [
            new Ingredient('M&Ms', 1), 
            new Ingredient('Brown sugar', 1)
        ]
    ),
    new Recipe(
        'Rainbow Cake',
        'Colorful',
        'https://img.goldbelly.com/uploads/product_image/image/39369/rainbow-cake.e269eb2edf61d3f96af838f905875631.jpg?ixlib=rails-3.0.2&w=820&h=820',
        [
            new Ingredient('Red food coloring', 1), 
            new Ingredient('flour', 1)
        ]
    ),
    ];

    getRecipes(){
        return this.recipes.slice(); //Returns an exact copy of the array.
    }

    getIngredientsForSL(recipeIngredients: Ingredient[]){
        this.shopListService.addIngredients(recipeIngredients);
    }

    getRecipeId(index:number){
        return this.recipes[index];
        }

    addNewRecipe(newRecipe: Recipe){
        this.recipes.push(newRecipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
        }

    deleteRecipe(id: number){
        this.recipes.splice(id, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    }
