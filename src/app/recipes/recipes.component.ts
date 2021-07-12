import { Component, OnInit } from '@angular/core';
import { recipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [recipeService]
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe;
  // recipes: Recipe[];

  // constructor(private recipeService: recipeService) { }
  constructor(){}

  ngOnInit() {
    // this.recipeService.recipeSelected
    //   .subscribe(
    //     (recipe: Recipe) => {
    //       this.selectedRecipe = recipe;
    //     }
    //   );
    // this.recipes = this.recipeService.getRecipes();

  }

}
