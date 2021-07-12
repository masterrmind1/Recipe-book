import { Subject } from "rxjs";
import { ingredient } from "../Shared/ingredient.model";

export class ShoppingService {

  IngredientChange = new Subject<ingredient[]>();
  private Ingredients: ingredient[] = [
    new ingredient('apple', 5),
    new ingredient('tomato', 10)
  ];
  static getIngredients: any;
  static IngredientChange: any;

  getIngredients() {
    return this.Ingredients.slice();
  }
  "sdfsf"
  addIngredient(ingredient: ingredient) {
    this.Ingredients.push(ingredient);
    this.IngredientChange.next(this.Ingredients.slice());
  }
  addIngredients(ingredients: ingredient[]) {
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient)
    // }
    this.Ingredients.push(...ingredients);
    this.IngredientChange.next(this.Ingredients.slice())
  }
}