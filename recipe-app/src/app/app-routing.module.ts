import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { NoRecipeSelectedComponent } from './recipe-book/no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { authGuard } from './authentication/auth-guard.service';

const appRoutes: Routes= [
    { path: '', redirectTo:'/home-recipes', pathMatch:'full' },//Only redierect if the full path is empty
    { path: 'home-recipes', component: RecipeBookComponent, children: [ //These are 'path' and 'action', respectively.
        {path:'' , component: NoRecipeSelectedComponent},
        {path:'new' , component: RecipeEditComponent, canActivate: [authGuard]},
        {path:':id' , component: RecipeDetailComponent},
        {path:':id/edit' , component: RecipeEditComponent, canActivate: [authGuard]}
    ]},
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent }



];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class appRoutingModule{

}