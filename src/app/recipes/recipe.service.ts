import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
      new Recipe(
        'A Test Recipe',
        'This dish is tasty',
        'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'),
      new Recipe(
        'A Dummy Recipe',
        'This dish is great',
        'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d')
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}
