// services/recipes.ts
import * as api from "./api";

export type Ingredient = {
  name: string;
  amount: number;
  unit: string;
};

export type Recipe = {
  id: string;
  title: string;
  shortDescription: string;
  ingredients: Ingredient[];
  steps: string;
};

// GET /api/recipes
export const getAllRecipes = () => api.get<Recipe[]>("/recipes");

// GET /api/recipes/:id
export const getRecipeById = (id: string) => api.get<Recipe>(`/recipes/${id}`);

// POST /api/recipes
export const createRecipe = (data: Omit<Recipe, "id">) =>
  api.post<Recipe>("/recipes", data);

// PUT /api/recipes/:id
export const updateRecipe = (id: string, data: Omit<Recipe, "id">) =>
  api.put<Recipe>(`/recipes/${id}`, data);

// DELETE /api/recipes/:id
export const deleteRecipe = (id: string) => api.del(`/recipes/${id}`);
