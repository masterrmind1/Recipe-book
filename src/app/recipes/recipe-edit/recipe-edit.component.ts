import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ingredient } from 'src/app/Shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  recipeIngredients = new FormArray([]);

  constructor(private route: ActivatedRoute,
    private recipeService: recipeService,
    private router: Router) {
    this.recipeForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'imagepath': new FormControl('', Validators.required),
      'discription': new FormControl('', Validators.required),
      'ingredients': this.recipeIngredients

    });

  }

  ngOnInit() {
    var path = this.router.url.split("/recipes/");
    if (path[1] == "new") {
      this.editMode = false;
    }
    else {
      this.route.params.subscribe(
        (params: Params) => {
          console.log(params)
          this.id = +params['id'];

          console.log(this.id)
          this.editMode = +params['id'] != null;

        }
      )
      this.initForm();
    }

  }

  onSubmit() {
    // const newRecipe=new Recipe(this.recipeForm.value['name'],
    // this.recipeForm.value['iamgePath'],       rather than stroaring this all i can directly pass
    // this.recipeForm.value['discription'],     recipeform.valur
    // this.recipeForm.value['ingredients'])
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }
  onAddIngredients() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  private initForm() {
    // let recipeName = '';
    // let recipeImagePath = '';
    // let recipeDiscription = '';
    

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      // recipeName = recipe.name;
      // recipeImagePath = recipe.imagepath;
      // recipeDiscription = recipe.discription;
      if (recipe['ingredients'])
      {
        for (let ingredient of recipe.ingredients) {
          this.recipeIngredients.push(
            new FormGroup
              ({
                'name': new FormControl(ingredient.name, Validators.required),
                'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
              })
          )
        }
        
        this.recipeForm.patchValue(
          {
            'name': recipe.name,
            'imagepath': recipe.imagepath,
            'discription': recipe.discription
          }
        )
      }
    }
  }
  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  onCancel(){
    this.router.navigate(['../'], {relativeTo:this.route})
  }
  onDeleteIngredients(index:number){
    this.recipeIngredients.removeAt(index)  }
  
}
