// services/recipes.ts
import * as api from "./api";

export type Ingredient = {
  id?: number;
  name: string;
  quantity: string;
  unit: string;
  recipeId?: number;
};

export type Recipe = {
  id: number;
  title: string;
  description: string | null;
  Ingredients: Ingredient[];
  steps: string;
  isFavorite: boolean;
};

// GET /api/recipes
export const getAllRecipes = (token?: string) =>
  api.get<Recipe[]>("/recipes", token);

// GET /api/recipes?favorites=true
export const getFavoriteRecipes = (token?: string) =>
  api.get<Recipe[]>("/recipes?favorites=true", token);

// GET /api/recipes/:id
export const getRecipeById = (id: number, token?: string) =>
  api.get<Recipe>(`/recipes/${id}`, token);

// POST /api/recipes
export const createRecipe = (
  data: Omit<Recipe, "id" | "isFavorite">,
  token?: string
) => api.post<Recipe>("/recipes", data, token);

// PUT /api/recipes/:id
export const updateRecipe = (
  id: number,
  data: Omit<Recipe, "id" | "isFavorite">,
  token?: string
) => api.put<Recipe>(`/recipes/${id}`, data, token);

// DELETE /api/recipes/:id
export const deleteRecipe = (id: number, token?: string) =>
  api.del(`/recipes/${id}`, token);

// PATCH /api/recipes/:id/favorite
export const toggleFavorite = (id: number, token?: string) =>
  api.patch<Recipe>(`/recipes/${id}/favorite`, {}, token);
