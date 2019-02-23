import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { NoRecipeSelectedComponent } from './recipe-book/no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';

const appRoutes: Routes= [
    { path: '', redirectTo:'/home-recipes', pathMatch:'full' },//Only redierect if the full path is empty
    { path: 'home-recipes', component: RecipeBookComponent, children: [ //These are 'path' and 'action', respectively.
        {path:'' , component: NoRecipeSelectedComponent},
        {path:'new' , component: RecipeEditComponent},
        {path:':id' , component: RecipeDetailComponent},
        {path:':id/edit' , component: RecipeEditComponent}


    ]},
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class appRoutingModule{

}