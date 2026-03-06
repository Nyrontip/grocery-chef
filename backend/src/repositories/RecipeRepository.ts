

import { Ingredient } from "../models";
import Recipe from "../models/Recipe";

export class RecipeRepository {
    // Obtener todas las recetas de un usuario con sus ingredientes
    async findAllByUserId(userId: number, favoritesOnly?: boolean) {
        const whereCondition: any = { userId };
        
        if (favoritesOnly) {
            whereCondition.isFavorite = true;
        }

        return await Recipe.findAll({
            where: whereCondition,
            include: [{model: Ingredient}],
            order: [['createdAt', 'DESC']]
        })
    }


    // Obtener el detalle de una receta por id (solo si pertenece al usuario)
    async findById(id: number, userId: number) {
        return await Recipe.findOne({
            where: { id, userId },
            include: [{ model: Ingredient }],
        });
    }

    // Crear una receta
    async create(data: {
        title: string;
        description?: string;
        steps?: string;
        userId: number;
    }) {
        return await Recipe.create(data);
    }

    // Eliminar una receta (solo si pertenece al usuario)
    async delete(id: number, userId: number) {
        const recipe = await Recipe.findOne({ where: { id, userId } });
        if (!recipe) return null;

        await recipe.destroy();
        return true;
    }

    // Alternar favorito: si es true lo pone false y viceversa
    async toggleFavorite(id: number, userId: number) {
        const recipe = await Recipe.findOne({ where: { id, userId } });
        if (!recipe) return null;

        recipe.isFavorite = !recipe.isFavorite;
        await recipe.save();
        return recipe;
    }

    // Actualizar campos de una receta
    async update(
        id: number,
        userId: number,
        data: {
            title?: string;
            description?: string;
            steps?: string;
        }
    ) {
        const recipe = await Recipe.findOne({ where: { id, userId } });
        if (!recipe) return null;

        // Solo actualiza los campos que vengan en el body
        if (data.title) recipe.title = data.title;
        if (data.description !== undefined) recipe.description = data.description;
        if (data.steps !== undefined) recipe.steps = data.steps;

        await recipe.save();
        return recipe;
    }
}
