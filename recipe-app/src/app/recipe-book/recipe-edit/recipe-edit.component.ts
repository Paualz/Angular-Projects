import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { recipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode = false;
  constructor(private activatedRoute: ActivatedRoute,
              private recipeService: recipeService) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.recipeService.getRecipeId(this.id);
        this.editMode = params['id'] != null;
        if(this.editMode){
          this.editRecipe();
        } else{
          this.insertNewRecipe()
        }
      }
    );
  }

  editRecipe(){}
  insertNewRecipe(){}
}
