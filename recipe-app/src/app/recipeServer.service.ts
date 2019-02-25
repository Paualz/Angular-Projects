import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipe-book/recipe.model';

export class recipeServerService {
    constructor (private http: HttpClient){}

    storeRecipes(recipes: Recipe[]){ //this post method will only create an observable.
        this.http.post(
            'https://ng-recipe-app-222.firebaseio.com/',
            recipes
        );
    }
}