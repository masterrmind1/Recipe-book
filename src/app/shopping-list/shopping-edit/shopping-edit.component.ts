import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput', {static:false}) nameInputRef:ElementRef; 
  // @ViewChild('amountInput', {static:false}) amountInputRef:ElementRef;
  @ViewChild('f') shopServiceForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: ingredient;
  editItemIndex: number;
  constructor(private shopServices: ShoppingService) { }


  ngOnInit() {
    this.subscription = this.shopServices.startEditing
      .subscribe(
        (index: number) => {
          this.editItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shopServices.getIngredient(index);
          this.shopServiceForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

  onAddItem(forms: NgForm) {
    const value = forms.value;
    // const ingName=this.nameInputRef.nativeElement.value;
    // const ingAmount=this.amountInputRef.nativeElement.value;
    // const newIngredient= new ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    const newIngredient = new ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shopServices.onUpdateIngredients(this.editItemIndex, newIngredient);
    }
    else {
      this.shopServices.addIngredient(newIngredient);
    }
    this.editMode = false;
    forms.reset();
  }
  onClear() {
    this.shopServiceForm.reset();
    this.editMode = false;
  }
  onDelet(){
    this.shopServices.deletIngredients(this.editItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
