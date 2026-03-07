import User from './User';
import Recipe from './Recipe';
import Ingredient from './Ingredient';

// RELACIONES

// Un usuario tiene muchas recetas
User.hasMany(Recipe, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});
Recipe.belongsTo(User, {
    foreignKey: 'userId',
});

// Una receta tiene muchos ingredientes
Recipe.hasMany(Ingredient, {
    foreignKey: 'recipeId',
    onDelete: 'CASCADE',
});
Ingredient.belongsTo(Recipe, {
    foreignKey: 'recipeId',
});

export { User, Recipe, Ingredient };