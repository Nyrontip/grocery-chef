import { Router } from 'express';
import { register, login } from '../controllers/AuthController';
import { authMiddleware } from '../middleware/Auth';
import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById } from '../controllers/RecipeController';

const router = Router();

// Auth — sin protección
router.post('/auth/register', register);
router.post('/auth/login', login);

// Recipes — con token
router.get('/recipes', authMiddleware, getAllRecipes);       
router.get('/recipes/:id', authMiddleware, getRecipeById);  
router.post('/recipes', authMiddleware, createRecipe);      
router.delete('/recipes/:id', authMiddleware, deleteRecipe); 


export default router;