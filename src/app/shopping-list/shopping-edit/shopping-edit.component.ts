import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput', {static:false}) nameInputRef:ElementRef; 
@ViewChild('amountInput', {static:false}) amountInputRef:ElementRef;

  constructor(private shopServices:ShoppingService) { }

  ngOnInit(): void {
  }
  
  onAddItem(){
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount=this.amountInputRef.nativeElement.value;
    const newIngredient= new ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
   this.shopServices.addIngredient(newIngredient)
  }
}
