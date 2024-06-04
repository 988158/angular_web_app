import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../share/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'This is simply a test', 
        'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_3563,h_3563,c_limit/04102023-ratatouille-lede.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ])
      ];


    constructor(private slService: ShoppingListService) {}
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id: number){
        return this.recipes[id];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}