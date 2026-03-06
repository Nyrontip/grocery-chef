import { RecipeRepository } from '../repositories/RecipeRepository';
import { IngredientRepository } from '../repositories/IngredientRepository';

export class RecipeService {
    private recipeRepository: RecipeRepository;
    private ingredientRepository: IngredientRepository;

    constructor() {
        this.recipeRepository = new RecipeRepository();
        this.ingredientRepository = new IngredientRepository();
    }

    // Listar todas las recetas de un usuario
    async getAllByUserId(userId: number) {
        return await this.recipeRepository.findAllByUserId(userId);
    }

    // Ver detalle de una receta con sus ingredientes
    async getById(id: number, userId: number) {
        const recipe = await this.recipeRepository.findById(id, userId);
        if (!recipe) throw new Error('Recipe not found');
        return recipe;
    }

    // Crear receta y sus ingredientes en un solo flujo
    async create(
        data: {
            userId: number;
            title: string;
            description?: string;
            steps?: string;
            ingredients?: { name: string; quantity: number; unit: string }[];
        }
    ) {
        const { userId,title, description, steps, ingredients } = data;

        if (!title) throw new Error('Title is required');

        // Crear la receta primero
        const recipe = await this.recipeRepository.create({
            title,
            description,
            steps,
            userId,
        });

        // Si vienen ingredientes, insertarlos todos de una sola vez
        if (ingredients && ingredients.length > 0) {
            const ingredientsData = ingredients.map((ing) => ({
                ...ing,
                recipeId: recipe.id,
            }));
            await this.ingredientRepository.createMany(ingredientsData);
        }

        //return await this.recipeRepository.findById(recipe.id, userId);
        // Retornar la receta con los datos que ya tenemos
        return {
            ...recipe,
            ingredients: ingredients || []
        };
    }

    // Eliminar una receta propia
    async delete(id: number, userId: number) {
        const deleted = await this.recipeRepository.delete(id, userId);
        if (!deleted) throw new Error('Recipe not found');
        return true;
    }
}