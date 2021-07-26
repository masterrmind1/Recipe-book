import { Injectable } from "@angular/core";
import { ingredient } from "../Shared/ingredient.model";
import { Recipe } from "./recipe.model";
import { ShoppingService } from "../shopping-list/shopping.service";
import { Subject } from "rxjs";
@Injectable()
export class recipeService {
    recipeChange = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe("Non-Veg", "this is my recipe",
            'https://www.seekpng.com/png/detail/154-1542824_varieties-veg-non-veg-dishes-restaurant-dishes-png.png', [
            new ingredient('meat', 2), new ingredient('onion', 12)]),
        new Recipe("Pizza", "this is my recipe",
            'https://cdn.shopify.com/s/files/1/1405/0664/products/4791207-9790062099-Pizza1_450x.jpg?v=1469649640', [
            new ingredient('burger', 10),
            new ingredient('pizza', 3)
        ])
    ];
    constructor(private shopping: ShoppingService) { }
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes[index];

    }
    movetoshopping(ingredients: ingredient[]) {
        this.shopping.addIngredients(ingredients);

    }
    addRecipe(newRecipe: Recipe) {
        this.recipes.push(newRecipe);
        this.recipeChange.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe:Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChange.next(this.recipes.slice());
    }
    deleteRecipe(index:number){
        this.recipes.splice(index, 1);
        this.recipeChange.next(this.recipes.slice())
    }

}
