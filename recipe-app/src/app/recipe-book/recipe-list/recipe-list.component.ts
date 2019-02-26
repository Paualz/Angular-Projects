import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { recipeServerService } from 'src/app/shared/recipeServer.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: recipeService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private recipeServerService: recipeServerService) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
    .subscribe(
      (newRecipes: Recipe[])=>{
        this.recipes = newRecipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
    this.recipeServerService.getRecipes();

  }

  onAddingNewRecipe(){
    this.router.navigate(['new'], {relativeTo:this.activatedRoute});
  }

  onSelectingRecipe(index: number){
    this.recipeService.startedEditingRecipe.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
