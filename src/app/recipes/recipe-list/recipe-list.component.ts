import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model'
import { recipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[];
  constructor(private recipeservice: recipeService,
    private router:Router, private route:ActivatedRoute) { }

  ngOnInit(){
    this.recipes=this.recipeservice.getRecipes();
   }
  onNewRecipe(){
this.router.navigate(['new'], {relativeTo:this.route})
  }

}
