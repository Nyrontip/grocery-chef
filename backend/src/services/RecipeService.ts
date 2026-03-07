import { RecipeRepository } from "../repositories/RecipeRepository";
import { IngredientRepository } from "../repositories/IngredientRepository";
import { Ingredient, Recipe } from "../models";

export class RecipeService {
  private recipeRepository: RecipeRepository;
  private ingredientRepository: IngredientRepository;

  constructor() {
    this.recipeRepository = new RecipeRepository();
    this.ingredientRepository = new IngredientRepository();
  }

  // Listar todas las recetas de un usuario (solo favoritos si se especifica)
  async getAllByUserId(userId: number, favoritesOnly?: boolean) {
    return await this.recipeRepository.findAllByUserId(userId, favoritesOnly);
  }

  // Ver detalle de una receta con sus ingredientes
  async getById(id: number, userId: number) {
    const recipe = await this.recipeRepository.findById(id, userId);
    if (!recipe) throw new Error("Recipe not found");
    return recipe;
  }

  // Crear receta y sus ingredientes en un solo flujo
  async create(data: {
    userId: number;
    title: string;
    description?: string;
    steps?: string;
    ingredients?: { name: string; quantity: number; unit: string }[];
  }) {
    const { userId, title, description, steps, ingredients } = data;

    if (!title) throw new Error("Title is required");

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
    // Retornar la receta con los datos que ya tenemos (solo dataValues)
    return {
      ...recipe.dataValues,
      ingredients: ingredients || [],
    };
  }

  // Eliminar una receta propia
  async delete(id: number, userId: number) {
    const deleted = await this.recipeRepository.delete(id, userId);
    if (!deleted) throw new Error("Recipe not found");
    return true;
  }

  // Activar o desactivar
  async toggleFavorite(id: number, userId: number) {
    const recipe = await this.recipeRepository.toggleFavorite(id, userId);
    if (!recipe) throw new Error("Recipe not found");
    return recipe;
  }

  // Editar receta — actualiza solo los campos que lleguen
  // Si también vienen ingredientes nuevos, reemplaza los existentes
  async update(
    id: number,
    userId: number,
    data: {
      title?: string;
      description?: string;
      steps?: string;
      Ingredients?: { name: string; quantity: number; unit: string }[];
    },
  ) {
    const { Ingredients, ...recipeFields } = data;

    // Actualizar campos de la receta
    const recipe = await this.recipeRepository.update(id, userId, recipeFields);
    if (!recipe) throw new Error("Recipe not found");

    // Si vienen ingredientes, reemplazar los existentes
    if (Ingredients !== undefined) {
      await this.ingredientRepository.deleteByRecipe(id);
      if (Ingredients.length > 0) {
        const ingredientsData = Ingredients.map((ing) => ({
          ...ing,
          recipeId: id,
        }));
        await this.ingredientRepository.createMany(ingredientsData);
      }
    }

    // Retornar la receta actualizada con ingredientes
    return await this.recipeRepository.findById(id, userId);
  }

  async getIngredientsByRecipeIds(
    ids: number[],
    userId: number,
  ): Promise<Ingredient[]> {
    const recipePromises = ids.map((id) =>
      this.recipeRepository.findById(id, userId),
    );

    const results = await Promise.all(recipePromises);

    const ingredients: Ingredient[] = results
      .filter((recipe): recipe is Recipe => recipe !== null)
      .flatMap((recipe) => recipe.Ingredients ?? []);

    return ingredients;
  }
}
