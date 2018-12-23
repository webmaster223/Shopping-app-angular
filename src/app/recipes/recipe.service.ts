import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';


export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
   private recipes : Recipe[] = [
        new Recipe(
            'test recipe',
            'simple test recipe',
            'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries',20),
            ]),
        new Recipe('test',
        'simple test',
        'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1),
        ])
      ];

      getRecipe(){
          return this.recipes.slice();
      }
}