import { ingredient } from "../Shared/ingredient.model";

export class Recipe{
public name:string;
public imagepath:string;
public discription:string;
public ingredients:ingredient[];
constructor(name:string, discript:string, imagepath:string, ingredients:ingredient[]){
this.name=name;
this.discription=discript;
this.imagepath=imagepath;
this.ingredients=ingredients;
}
}