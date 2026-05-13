import { Response } from "express";
import { RecipeService } from "../services/RecipeService";
import { AuthRequest } from "../middleware/Auth";
import { Ingredient } from "../models";
import { Recipe } from "../models";

const recipeService = new RecipeService();

// Obtener mis recetas (solo favoritos si se especifica ?favorites=true)
export const getAllRecipes = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    const recipes = await recipeService.getAllByUserId(
      userId,
      req.query.favorites === "true",
    );
    res.json(recipes);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una receta por ID de un usuario. GET /api/recipes/:id
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

// Crear una receta. POST /api/recipes
export const createRecipe = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    const { title, description, steps, ingredients } = req.body;

    const recipe = await recipeService.create({
      userId,
      title,
      description,
      steps,
      ingredients,
    });

    res.status(201).json(recipe);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Cambiar estado de favorito de una receta. PATCH /api/recipes/:id/favorite
export const toggleFavorite = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    const recipeId = Number(req.params.id);
    const recipe = await recipeService.toggleFavorite(recipeId, userId);
    res.json(recipe);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

// Actualizar una receta. PUT /api/recipes/:id
export const updateRecipe = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    const recipeId = Number(req.params.id);
    const { title, description, steps, Ingredients } = req.body;

    const recipe = await recipeService.update(recipeId, userId, {
      title,
      description,
      steps,
      Ingredients,
    });

    res.json(recipe);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

// Eliminar una receta. DELETE /api/recipes/:id
export const deleteRecipe = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    const recipeId = Number(req.params.id);
    await recipeService.delete(recipeId, userId);
    res.json({ message: "Recipe deleted successfully" });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

// Obtener varios ingredientes por un array de IDs de recetas
// POST /api/recipes/ingredients/by-ids
export const getIngredientsByRecipeIds = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    const userId = req.user!.id;
    const { ids } = req.body;

    if (!Array.isArray(ids)) {
      return res.status(400).json({ message: "ids must be an array" });
    }

    const ingredients = await recipeService.getIngredientsByRecipeIds(
      ids,
      userId,
    );

    res.json(ingredients);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
