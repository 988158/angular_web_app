import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../share/ingredient.model";

export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 15),
      ];

    getIngredients(){
        return this.ingredients.slice();
    }  

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}