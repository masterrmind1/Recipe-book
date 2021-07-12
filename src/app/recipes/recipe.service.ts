import {  Injectable } from "@angular/core";
import { ingredient } from "../Shared/ingredient.model";
import { Recipe } from "./recipe.model";
import { ShoppingService } from "../shopping-list/shopping.service";
@Injectable()
export class recipeService {
    // recipeSelected = new Subject<Recipe>();
    private recipes: Recipe[] = [
        new Recipe("Non-Veg", "this is my recipe",
            'https://www.seekpng.com/png/detail/154-1542824_varieties-veg-non-veg-dishes-restaurant-dishes-png.png', [
            new ingredient('meat', 2  ), new ingredient('onion', 12)]),
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
        console.log(this.recipes)
        return this.recipes[index];

    }
    movetoshopping(ingredients: ingredient[]) {
        this.shopping.addIngredients(ingredients);

    }

}
