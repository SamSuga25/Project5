import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shopping-list/shopping-edit/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('Kompot','non-alcoholic sweet beverage of Slavic origin,that may be served hot or cold, depending on tradition and season',
  
'../src/app/img/kompot.jpg',
 
 [
    new Ingredient('Strawberry',1),
   
new Ingredient('Aprhicote',2),
   
new Ingredient('Apples',4),
  ]),

new Recipe('A cochinita pibil','A mexican cuisine ','../src/app/img/pibil.jpg',

[
  new Ingredient('Cow Meat',1),
  
new Ingredient('Chili',3),
  
new Ingredient('Peppers',1),
 
new Ingredient('Cabbage',1)
]),
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
  getRecipe(index:number){
    return this.recipes[index];
  }

constructor(private slsService: ShoppingListService) { }

}
