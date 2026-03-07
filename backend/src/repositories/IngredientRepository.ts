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

    // Eliminar todos los ingredientes de una receta (usado al editar)
    async deleteByRecipe(recipeId: number) {
        return await Ingredient.destroy({ where: { recipeId } });
    }
}