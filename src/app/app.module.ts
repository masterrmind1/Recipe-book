import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemsComponent } from './recipes/recipe-list/recipe-items/recipe-items.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DropdownDirective } from './Shared/dropdown.directive';
// import { routingComponent } from './route/route.module';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingService } from './shopping-list/shopping.service';
import { recipeService } from './recipes/recipe.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RouteRoutingModule } from './route-routing.module';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { RouteModule, routingComponent } from './route/route.module';


@NgModule({
    declarations: [
        HeaderComponent,
        ShoppingEditComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemsComponent,
        ShoppingListComponent,
        RecipesComponent,
        DropdownDirective,
        AppComponent,
        RecipeStartComponent,
        RecipeEditComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouteRoutingModule
  ],
    providers: [ShoppingService,recipeService],
    bootstrap: [AppComponent]
})
export class AppModule { }