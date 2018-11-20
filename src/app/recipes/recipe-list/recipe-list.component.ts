import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This dish is tasty', 'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'),
    new Recipe('A Dummy Recipe', 'This dish is great', 'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d')
  ];

  @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onrecipeSelectedForView(selectedRecipe: Recipe) {
    this.recipeSelected.emit(selectedRecipe);
  }

}
