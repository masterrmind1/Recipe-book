import { Subject } from "rxjs";
import { ingredient } from "../Shared/ingredient.model";

export class ShoppingService {

  IngredientChange = new Subject<ingredient[]>();
  startEditing=new Subject<number>();
  private Ingredients: ingredient[] = [
    new ingredient('apple', 5),
    new ingredient('tomato', 10)
  ];
  static getIngredients: any;
  static IngredientChange: any;
  getIngredient(index: number) {
    return this.Ingredients[index];
  }
  onUpdateIngredients(index:number, newIngredient:ingredient){
    this.Ingredients[index]=newIngredient;
    this.IngredientChange.next(this.Ingredients.slice());
  }

  getIngredients() {
    return this.Ingredients.slice();
  }
  addIngredient(ingredient: ingredient) {
    this.Ingredients.push(ingredient);
    this.IngredientChange.next(this.Ingredients.slice());
  }
  deletIngredients(index:number){
    this.Ingredients.splice(index, 1);
    this.IngredientChange.next(this.Ingredients.slice())
  }
  addIngredients(ingredients: ingredient[]) {
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient)
    // }
    this.Ingredients.push(...ingredients);
    this.IngredientChange.next(this.Ingredients.slice())
  }
}