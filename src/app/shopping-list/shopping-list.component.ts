import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { ingredient } from '../Shared/ingredient.model';
import { ShoppingService } from './shopping.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private igChange: Subscription;
  ingredients: ingredient[];
  constructor(private shopServices: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shopServices.getIngredients();
    this.igChange = this.shopServices.IngredientChange.subscribe((ingredients: ingredient[]) => {
      this.ingredients = ingredients;
    })
  }
  
  onEditItem(index: number) {
    this.shopServices.startEditing.next(index);
  }
  
  ngOnDestroy() {
    this.igChange.unsubscribe;
  }


}
