import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe;
  // recipes: Recipe[];

  // constructor(private recipeService: recipeService) { }
  constructor(private route:ActivatedRoute){}

  ngOnInit() {
    // this.recipeService.recipeSelected
    //   .subscribe(
    //     (recipe: Recipe) => {
    //       this.selectedRecipe = recipe;
    //     }
    //   );
    // this.recipes = this.recipeService.getRecipes();
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params)     
      }
    );
    

  }

}
