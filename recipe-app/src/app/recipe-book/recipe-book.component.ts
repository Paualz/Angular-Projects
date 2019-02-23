import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { recipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [recipeService]
})
export class RecipeBookComponent implements OnInit {


  constructor(private recipeService: recipeService) { }

  ngOnInit() {

  }

}