import { Response } from 'express';
import { RecipeService } from '../services/RecipeService';
import { AuthRequest } from '../middleware/Auth';

const recipeService = new RecipeService();

// Obtener mis recetas
export const getAllRecipes = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const recipes = await recipeService.getAllByUserId(userId);
        res.json(recipes);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una receta por ID de un usuario
export const getRecipeById = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const recipeId = Number(req.params.id);
        const recipe = await recipeService.getById(recipeId, userId);
        res.json(recipe);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

// Crear una receta
export const createRecipe = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const { title, description, steps, ingredients } = req.body;

        const recipe = await recipeService.create( {
            userId,
            title,
            description,
            steps,
            ingredients,
        } );

        res.status(201).json(recipe);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una receta
export const deleteRecipe = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const recipeId = Number(req.params.id);
        await recipeService.delete(recipeId, userId);
        res.json({ message: 'Recipe deleted successfully' });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};