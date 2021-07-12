import { InvokeMethodExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() index: number;
  recipe: Recipe;

  id: number;
  constructor(private recipeservice: recipeService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    // const idd= this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeservice.getRecipe(this.id);
        console.log(this.id)
        console.log(this.recipeservice.getRecipe(this.id))

      }
    )
  }
  onAddShopping() {
    this.recipeservice.movetoshopping(this.recipe.ingredients);
  }
  onEditRecipe() {
    this.router.navigate(['edit]'], { relativeTo: this.route })
    // this.router.navigate(['../', this.id, 'edit'],{relativeTo:this.route})
  }
  edit(){
    this.router.navigate(['/edit'],{relativeTo:this.route});
  }
}
