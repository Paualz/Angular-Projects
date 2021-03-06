import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe-book/recipe.model';
import 'rxjs/Rx'
import { Injectable } from '@angular/core';
import { recipeService } from '../recipe-book/recipe.service';
import { authService } from '../authentication/authentication.service';

@Injectable()
export class recipeServerService {
    constructor (private http: HttpClient,
                private recipeService: recipeService,
                private auth: authService){}

    storeRecipes(){ //this post method will only create an observable, which wraps our request,
        // but won't send it, until we SUBSCRIBE to it(this is why we RETURN the value).
        let token = this.auth.getToken();
        return this.http.put(
            'https://ng-recipe-app-222.firebaseio.com/recipes.json?auth=' + token,
            this.recipeService.getRecipes() //We're getting our recipe array as a parameter of what to store in the DB
        );
    }

    getRecipes(){
       let token = this.auth.getToken(); //GEt the auth token for showing stuff-
        return this.http.get<Recipe[]>('https://ng-recipe-app-222.firebaseio.com/recipes.json?auth=' + token) //Extra query parameter to pass the token
        .map(
            (recipes)=>{ //In case the recipe doesn't have ingredients, we provide it with an empty array.
                for (let recipe of recipes){
                    if(!recipe['ingredients']){
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
    
        )
        .subscribe(
            (recipes: Recipe[])=>{
                this.recipeService.setRecipes(recipes);
                console.log(recipes);
            }
        );
    }
}