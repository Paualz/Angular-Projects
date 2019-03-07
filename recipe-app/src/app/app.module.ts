import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { dropwDownDirective } from './shared/dropdown.directive';
import { shopListService } from './shopping-list/shopList.service';
import { appRoutingModule } from './app-routing.module';
import { NoRecipeSelectedComponent } from './recipe-book/no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { recipeService } from './recipe-book/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { recipeServerService } from './shared/recipeServer.service';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { authService } from './authentication/authentication.service';
import { authGuard } from './authentication/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    RecipeBookComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    dropwDownDirective,
    NoRecipeSelectedComponent,
    RecipeEditComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ],
  providers: [shopListService,
              recipeService,
              recipeServerService,
              authService,
              authGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
