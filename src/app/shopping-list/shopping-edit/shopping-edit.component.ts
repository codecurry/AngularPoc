import {
   Component,
   OnInit,
   ViewChild,
   ElementRef,
   Output,
   EventEmitter
  } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') elNameInput: ElementRef;
  @ViewChild('amountInput') elAmountInput: ElementRef;
  @Output() itemAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  ingredientName = '';

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingredient = new Ingredient('name', 1);
    // ingredient.name = this.elNameInput.nativeElement.value;
    ingredient.name = this.ingredientName;
    ingredient.amount = this.elAmountInput.nativeElement.value;
    this.itemAdded.emit(ingredient);
  }
}
