import Ingredient from '../models/Ingredient';

export class IngredientRepository {
    // Insertar varios ingredientes a la vez
    async createMany(ingredients: {
        name: string;
        quantity: number;
        unit: string;
        recipeId: number;
    } []) {
        return await Ingredient.bulkCreate(ingredients);
    }
}