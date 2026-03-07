import { Router } from "express";
import { register, login } from "../controllers/AuthController";
import { authMiddleware } from "../middleware/Auth";
import {
  createRecipe,
  deleteRecipe,
  getAllRecipes,
  getRecipeById,
  getIngredientsByRecipeIds,
  toggleFavorite,
  updateRecipe,
} from "../controllers/RecipeController";

const router = Router();

// Auth — sin protección
router.post("/auth/register", register);
router.post("/auth/login", login);

// Recipes — con token
router.get("/recipes", authMiddleware, getAllRecipes);
router.get("/recipes/:id", authMiddleware, getRecipeById);
router.post("/recipes", authMiddleware, createRecipe);
router.patch("/recipes/:id/favorite", authMiddleware, toggleFavorite);
router.put("/recipes/:id", authMiddleware, updateRecipe);
router.delete("/recipes/:id", authMiddleware, deleteRecipe);
router.post(
  "/recipes/ingredients/by-ids",
  authMiddleware,
  getIngredientsByRecipeIds,
);

export default router;
