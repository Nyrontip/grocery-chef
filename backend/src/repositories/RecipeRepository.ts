

import { Ingredient } from "../models";
import Recipe from "../models/Recipe";

export class RecipeRepository {
    // Obtener todas las recetas de un usuario con sus ingredientes
    async findAllByUserId(userId: number) {
        return await Recipe.findAll({
            where: {userId},
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
}
