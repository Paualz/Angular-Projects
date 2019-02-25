import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { recipeService } from '../recipe.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private recipeService: recipeService) {}

  ngOnInit() {
      this.activatedRoute.params
          .subscribe(
              (params: Params) => {
                  this.id = +params['id'];
                  this.editMode = params['id'] != null;
                  this.initForm();
              }
          );
  }
  //This will set the inital variables as empty strings. Then, if edit mode is true, 
  //it'll get the values from the recipe. In any case, the variables used are the same. Only the values differ.
  private initForm() {
      let recipeName = '';
      let recipeDesc = '';
      let recipeImg = '';
      let recipeIng = new FormArray([]);
      if (this.editMode) {
          let recipe = this.recipeService.getRecipeId(this.id);
          recipeName = recipe.name;
          recipeDesc = recipe.description;
          recipeImg = recipe.imagePath;
          if (recipe['ingredients']) { //check if there are any ingredients included in the recipe.
              for (let ingredient of recipe.ingredients) { //loop 'em
                  recipeIng.push( //push 'em to the formArray, each of them being a formgroup(as if this was data that was grouped.).
                      new FormGroup({
                          'name': new FormControl(ingredient.name, Validators.required),
                          'amount': new FormControl(ingredient.amount, [
                              Validators.required,
                              Validators.pattern(/^[1-9]+[0-9]*$/)
                          ])
                      })
                  );
              }
          }
      }
      this.recipeForm = new FormGroup({ //this takes a JS object and
          // its form CONTROLS -key/value pairs-.
          'recipeName': new FormControl(recipeName, [
              Validators.required,
          ]),
          'recipeDesc': new FormControl(recipeDesc, [
              Validators.required
          ]),
          'recipeImg': new FormControl(recipeImg, [
              Validators.required
          ]),
          'recipeIng': recipeIng
      });
  }

  onSubmitRecipe() {
      let newRecipe = new Recipe(
          this.recipeForm.value['recipeName'],
          this.recipeForm.value['recipeDesc'],
          this.recipeForm.value['recipeImg'],
          this.recipeForm.value['recipeIng']
      );

      if (this.editMode) {
          this.recipeService.updateRecipe(this.id, newRecipe)
      } else {
          this.recipeService.addNewRecipe(newRecipe);
      }

  }

  onDeleteIngredient(ingredient: number) {
    (<FormArray>this.recipeForm.get('recipeIng')).removeAt(ingredient);
  }

  onAddIngredient() {
      ( < FormArray > this.recipeForm.get('recipeIng')).push(
          new FormGroup({
              'name': new FormControl(null, Validators.required),
              'amount': new FormControl(null, Validators.required)

          })
      );
  }

  onCancel(){
    this.onClearRecipeForm();
    this.router.navigate(['home-recipes', this.id]);
  }
  onClearRecipeForm(){
      this.recipeForm.reset();
  }
}
