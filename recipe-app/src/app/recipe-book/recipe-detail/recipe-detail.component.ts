import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { recipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe; 
  id: number; 
  constructor(private recipeService: recipeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeId(this.id);
      }
    );
  }

  onPassingIngredients(){
    let recipeIngredients = this.recipe.ingredients;
    this.recipeService.getIngredientsForSL(recipeIngredients);
  }

  onEditingRecipe(){
    // this.router.navigate([this.id, 'edit'], {relativeTo:this.activatedRoute});
    this.router.navigate(['edit'], {relativeTo:this.activatedRoute});

  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['home-recipes']);
  }
}
